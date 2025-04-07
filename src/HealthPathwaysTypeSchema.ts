type Attribute = {
    validators: {
      options: {
        options: string[];
      };
    };
    value: string | undefined;
    name: string;
  };
  
  type AttributeKeys =
    |   'organisation'
    | 'professionalRole'
    | 'professionalRoleOther'
    | 'registrationNumber'
    | 'registeringBody'
    | 'phone'
    | 'postCode';
  
  type AttributesByName = {
    [K in AttributeKeys]: Attribute;
  };
  
  export type Profile = {
    attributes: Attribute[];
    attributesByName: AttributesByName;
  };
  
  type FormData = {
    [K in AttributeKeys]?: string;
  };
  
  export type Register = {
    formData: FormData;
  };
  
  export type AccountSchema = {
    attributes: FormData;
  };
  
  export type User = {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
  };