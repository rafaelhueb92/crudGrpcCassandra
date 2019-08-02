const deparaObjetos = (arg, model) => {
  for (let key in arg) {
    if (arg.hasOwnProperty(key)) {
      if (arg[key]) model[key] = arg[key];
    }
  }
  return model;
};

module.exports = { deparaObjetos };
