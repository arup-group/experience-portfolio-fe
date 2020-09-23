import React from "react";
import Select from "react-select";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { observer } from "mobx-react";
import { set } from "mobx";

function KeywordsMenu(props) {
  const { StaffID } = props.currentUser.currentUser[0];
  const { fullProjList } = props.fullDescProjList;
  const { staffKeywordList } = props.staffKeywordList;

  if (staffKeywordList.length < 1) return null;

  const keywordGroupName = staffKeywordList.map((keyword) => {
    return Object.keys(keyword);
  });
  console.log(keywordGroupName);

  const options = [
    { value: staffKeywordList[0], label: staffKeywordList[0], isFixed: true },
  ];
  return (
    <>
      <Formik
        initialValues={{
          KeywordCodes: "",
          KeywordGroupName: "",
          Keywords: "",
        }}
        validationSchema={Yup.object({})}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <Select
              name="KeywordGroupName"
              closeMenuOnSelect={false}
              defaultValue=""
              isMulti
              options={options}
            />
          </Form>
        )}
      </Formik>
    </>
  );
}
export default observer(KeywordsMenu);
