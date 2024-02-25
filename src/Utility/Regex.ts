interface RegexType {
  Name: RegExp;
  Email: RegExp;
  Password: RegExp;
  Phone: RegExp;
  CountryCode: RegExp;
}
export const Regex: RegexType = {
  Name: /^(?! ).*[^ ]$/,
  Email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  Password: /^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,})$/,
  Phone: /^\\d{1,10}$/,
  CountryCode: /^\\+\\d{1,2}$/,
};
