import root from "window-or-global";

const safeOrigin =
  typeof root.location !== "undefined"
    ? root.location.origin
    : "http://default-origin.com";

const URL = {
  ORIGIN: safeOrigin,
  GET_ALERTS: `${safeOrigin}/api/get-alerts`,
  GET_DASHBOARD_DATA: `${safeOrigin}/api/get-dashboard-data`,
  GET_EARNINGS_DATA: `${safeOrigin}/api/get-earnings-data`,
  UPDATE_PAYOUT_TYPE: `${safeOrigin}/api/update-payout-type`,
  GET_INFLUENCER_PROFILE: `http://localhost:3000/api/get-influencer-profile`,
  CREATE_INFLUENCER_PROFILE: `${safeOrigin}/api/create-influencer-profile`,
  CREATE_RESEND_EMAIL_VERIFICATION: `${safeOrigin}/api/create-resend-email-verification`,
  GET_ACCOUNT_SOCIAL_LINKS: `${safeOrigin}/api/get-account-social-links`,
  GET_AFFILIATE_SOCIAL_CHANNELS: `${safeOrigin}/api/get-affiliate-social-channels`,
  UPDATE_AFFILIATE_MAIN_CHANNEL: `${safeOrigin}/api/update-affiliate-main-channel`,
  DISCONNECT_AFFILIATE_SOCIAL_CHANNEL: `${safeOrigin}/api/disconnect-affiliate-social-channel`,
  GET_PAYOUT_PERIODS: `${safeOrigin}/api/get-payout-periods`,
  GET_PAYOUT_REPORT: `${safeOrigin}/api/get-payout-report`,
  GET_PAYOUT_REPORT_LIST: `${safeOrigin}/api/get-payout-report-list`,
  GET_PAYOUT_REPORT_DETAIL: `${safeOrigin}/api/get-payout-report-detail`,
  TRACE_SECURITY_LINK: `${safeOrigin}/api/trace-security-link`,
  GET_ORGANIZATIONS: `${safeOrigin}/api/get-organizations`,
  GET_TAX_INTERVIEW: `${safeOrigin}/api/get-tax-interview`,
  GET_TAX_RECORD: `${safeOrigin}/api/get-tax-record`,
  GET_RECORD_EMAIL: `${safeOrigin}/api/get-record-email`,
  GET_BALANCE_PAYABLE: `${safeOrigin}/api/get-balance-payable`,
  GET_CONSENT: `${safeOrigin}/api/get-consent`,
  GET_HYPERWALLET_ACTIVE_LINK: `${safeOrigin}/api/get-hyperwallet-active-link`,
  RETAKE_INTERVIEW: `${safeOrigin}/api/retake-interview`,
  REFRESH_TAX_RECORD: `${safeOrigin}/api/refresh-tax-record`,
  GET_UPDATE_AVAILABLE: `${safeOrigin}/api/get-update-available`,
  GET_TAX_STATUS: `${safeOrigin}/api/get-tax-status`,
  CONSENT_FOR_PAYMENT: `${safeOrigin}/api/consent-for-payment`,
  UPDATE_TAX_RECORD: `${safeOrigin}/api/update-tax-record`,
  GET_ACCOUNT_STATUS: `${safeOrigin}/api/get-account-status`,
  GET_AFFILIATE_AGREEMENT: `${safeOrigin}/api/get-affiliate-agreement`,
  GET_CODE_OF_CONDUCT: `${safeOrigin}/api/get-code-of-conduct`,
  ACCEPT_AFFILIATE_AGREEMENT: `${safeOrigin}/api/accept-affiliate-agreement`,
  ACCEPT_CODE_OF_CONDUCT: `${safeOrigin}/api/accept-code-of-conduct`,
  GET_OVERVIEW_DATA: `${safeOrigin}/api/get-overview-data`,
  GET_PAGE: `${safeOrigin}/api/get-page`,
  GET_AFFILIATE_SLUG_OPTIONS: `${safeOrigin}/api/get-affiliate-slug-options`,
  UPDATE_INFLUENCER_PROFILE: `${safeOrigin}/api/update-influencer-profile`,
  GET_TAX_INFO: `${safeOrigin}/api/get-tax-info`,
  UPDATE_TAX_INFO: `${safeOrigin}/api/update-tax-info`,
  GET_PAYOUT_ACCOUNT: `${safeOrigin}/api/get-payout-account`,
  GET_AFFILIATE_PROFILE: `${safeOrigin}/api/get-affiliate-profile`,
  UPDATE_PAYOUT_ACCOUNT: `${safeOrigin}/api/update-payout-account`,
  CHECK_W9FORM: `${safeOrigin}/api/check-w9form`,
  UPLOAD_W9FORM: `${safeOrigin}/api/upload-w9form`,
  UPDATE_TWO_FACTOR_AUTHENTICATION: `${safeOrigin}/api/update-two-factor-authentication`,
  GET_CHECK_EMAIL_VERIFICATION: `${safeOrigin}/api/get-check-email-verification`,
};

export default URL;
