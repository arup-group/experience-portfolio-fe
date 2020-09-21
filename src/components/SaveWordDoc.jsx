import React from "react";
import { saveAs } from "file-saver";
import { HeightRule, VerticalAlign } from "docx";

const axios = require("axios");

const getProjectImage = (requestURL) => {
  return axios
    .get(requestURL, {
      responseType: "arraybuffer",
    })
    .then((response) =>
      Buffer.from(response.data, "binary").toString("base64")
    );
};

const exportFunction = async (staffMeta, projects) => {
  const docx = require("docx");
  const {
    Document,
    Packer,
    Paragraph,
    Media,
    Table,
    TableCell,
    TableLayoutType,
    TableRow,
    WidthType,
    AlignmentType,
    HeadingLevel,
    BorderStyle,
    TextRun,
    Footer,
  } = docx;

  const StaffID = staffMeta.StaffID;
  const todaysDate = new Date(Date.now()).toLocaleString().split(",")[0];

  const doc = new Document({
    title: `CV - ${staffMeta.StaffName} - ${todaysDate}`,
    description: "Automatically generated CV",
    styles: {
      paragraphStyles: [
        {
          id: "Heading1",
          name: "Heading 1",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: {
            size: 36,
            bold: true,
            color: "707B7C",
          },
          paragraph: {
            spacing: {
              before: 0,
              after: 0,
            },
          },
        },
        {
          id: "Heading2",
          name: "Heading 2",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: {
            size: 24,
            bold: true,
            color: "000000", //000000
          },
          paragraph: {
            spacing: {
              before: 80,
              after: 80,
            },
          },
        },
        {
          id: "StaffMetaLabel",
          name: "Staff Meta Label",
          run: {
            size: 19,
            color: "000000", //000000
            bold: true,
          },
          quickFormat: true,
          paragraph: {
            spacing: {
              before: 113,
              after: 57,
            },
          },
        },
        {
          id: "StaffMeta",
          name: "Staff Meta",
          run: {
            size: 19,
            color: "000000", //000000
          },
          quickFormat: true,
          paragraph: {
            spacing: {
              before: 0,
              after: 57,
            },
          },
        },
        {
          id: "MainBody",
          name: "Main Body",
          run: {
            size: 24,
            color: "000000", //000000
          },
          paragraph: {
            spacing: {
              before: 0,
              after: 170,
            },
          },
        },
        {
          id: "ValueStatement",
          name: "Value Statement",
          run: {
            size: 24,
            color: "000000", //000000
          },
          paragraph: {
            spacing: {
              before: 0,
              after: 170,
            },
            indent: {
              left: 360,
            },
          },
        },
        {
          id: "Footer",
          name: "Footer",
          run: {
            size: 14,
            color: "000000", //000000
          },
          paragraph: {
            spacing: {
              before: 0,
              after: 100,
            },
          },
        },
        {
          id: "FooterSmall",
          name: "FooterSmall",
          run: {
            size: 10,
            color: "707B7C", //000000
          },
          paragraph: {
            spacing: {
              before: 0,
              after: 100,
            },
          },
        },
      ],
    },
  });

  const removeBorders = {
    top: { style: BorderStyle.NIL },
    bottom: { style: BorderStyle.NIL },
    left: { style: BorderStyle.NIL },
    right: { style: BorderStyle.NIL },
  };

  // Get images
  const requestURL = staffMeta.imgURL;
  let b64 = await getProjectImage(requestURL);
  b64 = "data:image/jpeg;base64, " + b64;
  const image1 = Media.addImage(doc, b64, 150);

  const arupLogoURL =
    "https://res.cloudinary.com/gfsimages/image/upload/v1600708726/expport/arup_logo_small_uisyxo.png";
  b64 = await getProjectImage(arupLogoURL);
  b64 = "data:image/jpeg;base64, " + b64;
  const arupLogo = Media.addImage(doc, b64, 100, 40);

  // Set up staff meta table

  const staffMetaKeys = Object.keys(staffMeta);

  const staffMetaLabels = {
    JobTitle: "Current Position",
    DisciplineName: "Profession",
    StartDate: "Joined Arup",
    nationality: "Nationality",
    qualifications: "Qualifications",
    professionalAssociations: "Professional Associations",
    publications: "Publications",
    committees: "Committees",
    yearsOfExperience: "Years of Experience",
  };

  const staffMetaArray = [];

  staffMetaKeys.forEach((staffitem) => {
    if (
      (Array.isArray(staffMeta[staffitem]) &&
        staffMeta[staffitem].length > 0) ||
      (!Array.isArray(staffMeta[staffitem]) &&
        staffMeta[staffitem] &&
        staffMetaLabels[staffitem])
    ) {
      const label = new TextRun({
        text: `${staffMetaLabels[staffitem]}`,
        bold: true,
      });

      staffMetaArray.push(
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${staffMetaLabels[staffitem]}`,
                    }),
                  ],
                  style: "StaffMetaLabel",
                }),
                new Paragraph({
                  text: `${staffMeta[staffitem]}`,
                  style: "StaffMeta",
                }),
              ],
              borders: removeBorders,
            }),
          ],
          borders: removeBorders,
        })
      );
    }
  });

  staffMetaArray.unshift(
    new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph(image1),
            new Paragraph(``),
            new Paragraph(``),
          ],
          borders: removeBorders,
          alignment: AlignmentType.CENTER,
          alignment: "center",
        }),
      ],
      borders: removeBorders,
      alignment: AlignmentType.CENTER,
      alignment: "center",
    })
  );

  const highLevelDescriptionRow = new TableRow({
    children: [
      new TableCell({
        children: [
          new Paragraph({
            text: `${staffMeta.highLevelDescription}`,
            style: "MainBody",
          }),
        ],
        borders: removeBorders,
      }),
    ],
    borders: removeBorders,
  });

  const valueStatementRow = new TableRow({
    children: [
      new TableCell({
        children: [
          new Paragraph({
            text: `${staffMeta.valueStatement}`,
            style: "ValueStatement",
          }),
        ],
        borders: removeBorders,
      }),
    ],
    borders: removeBorders,
  });

  const projectsTableEntries = projects.map((project) => {
    if (project.experience !== null) {
      return new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: `${project.JobNameLong} (${project.ClientName})`,
                alignment: AlignmentType.LEFT,
                heading: HeadingLevel.HEADING_2,
              }),
              new Paragraph({
                text: `${project.ScopeOfWorks}`,
                style: "MainBody",
              }),
              new Paragraph({
                text: `${project.experience}`,
                style: "MainBody",
              }),
            ],
            borders: removeBorders,
          }),
        ],
        borders: removeBorders,
      });
    } else {
      return new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: `${project.JobNameLong} (${project.ClientName})`,
                alignment: AlignmentType.LEFT,
                heading: HeadingLevel.HEADING_2,
              }),
              new Paragraph({
                text: `${project.ScopeOfWorks}`,
                style: "MainBody",
              }),
            ],
            borders: removeBorders,
          }),
        ],
        borders: removeBorders,
      });
    }
  });

  if (staffMeta.valueStatement !== null)
    projectsTableEntries.unshift(valueStatementRow);
  if (staffMeta.highLevelDescription !== null)
    projectsTableEntries.unshift(highLevelDescriptionRow);

  const staffMetaTable = new Table({
    rows: staffMetaArray,
    width: {
      size: "90%",
      type: WidthType.pct,
    },
    layout: TableLayoutType.FIXED,
    alignment: AlignmentType.CENTER,
    borders: removeBorders,
  });

  const projectsTable = new Table({
    rows: projectsTableEntries,
    width: {
      size: "95%",
      type: WidthType.pct,
    },
    alignment: "center",
    layout: TableLayoutType.FIXED,
    borders: removeBorders,
  });

  const containerTable = new Table({
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: "Sam Styles",
                alignment: AlignmentType.LEFT,
                heading: HeadingLevel.HEADING_1,
              }),
              new Paragraph(``),
            ],
            columnSpan: 2,
            borders: removeBorders,
          }),
        ],
        borders: removeBorders,
      }),

      new TableRow({
        children: [
          new TableCell({
            children: [staffMetaTable],
            width: {
              size: "30%",
              type: WidthType.pct,
            },
            alignment: AlignmentType.CENTER,
            borders: removeBorders,
          }),
          new TableCell({
            children: [projectsTable],
            width: {
              size: "70%",
              type: WidthType.pct,
            },
            alignment: AlignmentType.CENTER,
            borders: removeBorders,
          }),
        ],
        borders: removeBorders,
      }),
    ],
    alignment: "center",
    width: {
      size: 9600,
      type: WidthType.DXA,
    },
    layout: TableLayoutType.FIXED,
    borders: removeBorders,
  });

  doc.addSection({
    footers: {
      default: new Footer({
        children: [
          new Table({
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        text: `${StaffID}.docx ${todaysDate}`,
                        alignment: AlignmentType.LEFT,
                        style: "FooterSmall",
                      }),
                    ],
                    verticalAlign: "bottom",
                    width: {
                      size: "45%",
                      type: WidthType.pct,
                    },
                    // alignment: AlignmentType.LEFT,
                    borders: removeBorders,
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({
                        text: "www.arup.com",
                        alignment: AlignmentType.LEFT,
                        style: "Footer",
                      }),
                    ],
                    verticalAlign: "bottom",
                    width: {
                      size: "15%",
                      type: WidthType.pct,
                    },
                    // alignment: AlignmentType.CENTER,
                    borders: removeBorders,
                  }),
                  new TableCell({
                    children: [new Paragraph("")],
                    width: {
                      size: "22%",
                      type: WidthType.pct,
                    },
                    verticalAlign: "bottom",
                    alignment: AlignmentType.RIGHT,
                    borders: removeBorders,
                  }),
                  new TableCell({
                    children: [new Paragraph(arupLogo)],
                    width: {
                      size: "18%",
                      type: WidthType.pct,
                    },
                    verticalAlign: "bottom",
                    alignment: AlignmentType.RIGHT,
                    borders: removeBorders,
                  }),
                ],
              }),
            ],
            width: {
              size: 9600,
              type: WidthType.DXA,
            },
            alignment: "center",

            layout: TableLayoutType.FIXED,
          }),
        ],
      }),
    },
    children: [containerTable],
    borders: removeBorders,
  });

  Packer.toBuffer(doc).then((buffer) => {
    const blob = new Blob([buffer], {
      type:
        "data:application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });
    const fileName = `${StaffID}.docx`;
    console.log("saving", fileName);
    saveAs(blob, fileName);
  });
};

const SaveWordDoc = (props) => {
  const { staffMeta, projectsWithID } = props;

  const projects = projectsWithID.map((project) => {
    return project.project;
  });

  // const projectsArr = projects.project;

  return (
    <div>
      <button
        onClick={() => {
          exportFunction(staffMeta, projects);
        }}
      >
        Export Word Doc
      </button>
    </div>
  );
};

export default SaveWordDoc;
