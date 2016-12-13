var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

;
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
    module.exports = {
      createSchema: factory.createSchema,
      mock: factory.mock
    };
  } else {
    root.MockSchema = factory;
  }
})(this, function (global) {
  /**
  * @private
  * @name _schema
  * @description The structure of schema
  */
  var _schema = {};

  /**
  * @name createDumbArray
  * @description create an Array with determined Length
  */
  function createDumbArray(len) {
    var dumbArray = [];
    for (var i = 0; i < len; i++) {
      dumbArray.push(i);
    }
    return dumbArray;
  }

  /**
  * @name createStructure
  * @description function for create the Schema Structure
  */
  function createStructure(obj, times) {
    var mocked = [];
    createDumbArray(times).forEach(function (name, index) {
      var _mock = Object.assign({}, obj);
      _mock.id = index;
      mocked.push(_mock);
    });
    return mocked;
  }

  /**
  * @name createSchema
  * @param {Object} schema The Schema model
  * @return void 0
  */
  function createSchema(schema) {
    Object.assign(_schema, schema);
  }

  /**
  * @name mock
  * @description always return an array with the Schema structure
  * @param {Object|String} The Schema Model
  * @param quantity The quantity of objects that will be returned
  * @return {Array}
  */
  function mock(schema, quantity) {
    var _strucuture = void 0,
        mockedData = {};

    typeof schema === "string" ? _strucuture = _schema[schema] : _strucuture = schema;

    for (var key in _strucuture) {
      var value = _strucuture[key];
      Object.assign(mockedData, _defineProperty({}, key, value));
    }
    return createStructure(mockedData, quantity);
  };

  return { mock: mock, createSchema: createSchema };
}(this));
//# sourceMappingURL=mockschema.js.map
