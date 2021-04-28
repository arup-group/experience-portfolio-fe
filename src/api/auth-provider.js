import { MsalAuthProvider, LoginType } from "react-aad-msal";
import { Logger, LogLevel } from "msal";

const isIE = () => {
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf("MSIE ") > -1;
  const msie11 = ua.indexOf("Trident/") > -1;

  // If you as a developer are testing using Edge InPrivate mode, please add "isEdge" to the if check
  // const isEdge = ua.indexOf("Edge/") > -1;

  return msie || msie11;
};

// Msal Configurations
const config = {
  auth: {
    authority:
      "https://login.microsoftonline.com/4ae48b41-0137-4599-8661-fc641fe77bea/" /* this is Arup tenant ID */,
    clientId:
      "63f00e47-f451-42dc-a6ea-a5cd1146be1d" /* this is the registered application ID */,
    validateAuthority: true,
    // postLogoutRedirectUri: 'http://localhost:3000',
    navigateToLoginRequestUrl: false,
    redirectUri: window.location.origin + "/auth.html",
    postLogoutRedirectUri: window.location.origin + "/auth.html",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: isIE(),
  },
  system: {
    navigateFrameWait: 0,
    logger: new Logger(
      (logLevel, message, containsPii) => {
        console.log("[MSAL]", message);
      },
      {
        level: LogLevel.Verbose,
        piiLoggingEnabled: false,
      }
    ),
  },
};

// Authentication Parameters
const authenticationParameters = {
  scopes: ["user.read"],
};

// Options
const options = {
  loginType: LoginType.Popup,
  tokenRefreshUri: window.location.origin + "/auth.html",
};

export const authProvider = new MsalAuthProvider(
  config,
  authenticationParameters,
  options
);
