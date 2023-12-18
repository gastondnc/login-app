export const LITERALS = {
  common: {
    loadingLabel: 'Loading...',
    legal: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deserunt, nisi delectus nam consectetur est. Quisquam magni modi odio dolor?',
    date: new Date().getFullYear(),
    copy: '©',
  },
  pages: [
    {
      id: "login",
      title: 'Welcome',
      form: {
        btnSubmitLabel: 'Login',
        placeholderUsername: 'username',
        placeholderPassword: 'password',
      }
    },
    {
      id: "profile",
      title: 'User Profile',
      form: {
        btnSubmitLabel: 'Update info',
        placeholderUsername: 'username',
        placeholderPassword: 'password',
      }
    },
    {
      id: "contact",
      title: 'Contact',
      form: {
        btnSubmitLabel: 'Send',
        placeholderTitle: 'title',
        placeholderDetail: 'detail',
      }
    },
    {
      id: 'personal',
      title: 'Personal',
      form: {
        btnSubmitLabel: 'Edit',
        labelFirstName: 'First Name',
        labelLastName: 'Last Name',
        labelEmail: 'Email',
        labelPhone: 'Phone',
        placeholderFirstName: 'Frist Name',
        placeholderLastName: 'Last Name',
        placeholderEmail: 'Email',
        placeholderPhone: 'Phone'
      }

    },
    {
      id: 'address',
      title: 'Address',
      form: {
        btnSubmitLabel: 'Edit',
        labelCity: 'City',
        labelStreet: 'Street',
        labelNumber: 'Number',
        labelZipCode: 'Zip-Code',
        placeholderCity: 'City',
        placeholderStreet: 'Street',
        placeholderNumber: 'Number',
        placeholderZipCode: 'Zip-Code'
      }
    },
    {
      id: 'register',
      title: 'Register',
      btnSubmitLabel: 'Register',
      btnLoginLabel: 'Log in',
      form: {
        labelUsername: 'Username',
        labelFirstName: 'First Name',
        labelLastName: 'Last Name',
        labelEmail: 'Email',
        labelPassword: 'Password',
        placeholderUsername: 'Username',
        placeholderFirstName: 'Frist Name',
        placeholderLastName: 'Last Name',
        placeholderEmail: 'Email',
        placeholderPassword: 'password',
        description: 'You are already a member',
        warning: 'If an error occurs while completing the form, a message will appear here'
      }
    }
  ]
}

