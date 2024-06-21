const yup = require('yup');

module.exports = yup
  .object()
  .shape({
    nome:
      yup
        .string()
        .min(2, 'Too short (name)')
        .max(100, 'Too long (name)')
        .required('Required (name)'),
    telefone:
      yup
        .string()
        .min(10, "Too short (telefone)")
        .max(14, 'Too long (telefone)')
        .required("Required (email)"),
  });
