(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const Contact = singleContactObj => {
  return ` <div class="card" id="contact-card">
    <h3>${singleContactObj.name}</h3>
    <p>${singleContactObj.phone}</p>
    <p>${singleContactObj.email}</p>
 </div>`;
};

var _default = Contact;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const buildContactObject = (nameParam, emailParam, phoneParam) => {
  return {
    name: nameParam,
    email: emailParam,
    phone: phoneParam
  };
};

var _default = buildContactObject;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const ContactCollection = {
  saveNewContact: contactObj => {
    return fetch("http://localhost:8080/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contactObj)
    });
  },
  getAllContacts: () => {
    return fetch("http://localhost:8080/contacts").then(r => r.json());
  }
};
var _default = ContactCollection;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ContactCollection = _interopRequireDefault(require("./ContactCollection"));

var _ContactBuilder = _interopRequireDefault(require("./ContactBuilder"));

var _ContactList = _interopRequireDefault(require("./ContactList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ContactForm = {
  buildForm: () => {
    return `
    <div class="form" id="contact-form">
      <h3>Add a New Contact</h3>
      <form action="">
        <input type="text" id="contact-name" placeholder="Name">
        <input type="tel" id="contact-phone" placeholder="Phone">
        <input type="email" id="contact-email" placeholder="Email">
      </form>
      <button id="save-contact">Save Contact</button>
    </div>`;
  },
  activateSaveButton: () => {
    document.querySelector(".output").addEventListener("click", () => {
      if (event.target.id === "save-contact") {
        const nameVal = document.querySelector("#contact-name").value;
        const phoneVal = document.querySelector("#contact-phone").value;
        const emailVal = document.querySelector("#contact-email").value;
        const objectToPost = (0, _ContactBuilder.default)(nameVal, phoneVal, emailVal);

        _ContactCollection.default.saveNewContact(objectToPost).then(() => {
          (0, _ContactList.default)();
        });
      }
    });
  }
};
var _default = ContactForm;
exports.default = _default;

},{"./ContactBuilder":2,"./ContactCollection":3,"./ContactList":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Contact = _interopRequireDefault(require("./Contact.js"));

var _ContactCollection = _interopRequireDefault(require("./ContactCollection.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.
const ContactList = () => {
  _ContactCollection.default.getAllContacts().then(contacts => {
    contacts.forEach(singleContact => {
      document.querySelector(".output").innerHTML += (0, _Contact.default)(singleContact);
    });
  });
};

var _default = ContactList;
exports.default = _default;

},{"./Contact.js":1,"./ContactCollection.js":3}],6:[function(require,module,exports){
"use strict";

var _ContactList = _interopRequireDefault(require("./ContactList.js"));

var _ContactForm = _interopRequireDefault(require("./ContactForm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.querySelector(".output").innerHTML = _ContactForm.default.buildForm();

_ContactForm.default.activateSaveButton();

(0, _ContactList.default)();

},{"./ContactForm.js":4,"./ContactList.js":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL0NvbnRhY3QuanMiLCIuLi9zY3JpcHRzL0NvbnRhY3RCdWlsZGVyLmpzIiwiLi4vc2NyaXB0cy9Db250YWN0Q29sbGVjdGlvbi5qcyIsIi4uL3NjcmlwdHMvQ29udGFjdEZvcm0uanMiLCIuLi9zY3JpcHRzL0NvbnRhY3RMaXN0LmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBLE1BQU0sT0FBTyxHQUFJLGdCQUFELElBQXNCO0FBQ2xDLFNBQVE7VUFDRixnQkFBZ0IsQ0FBQyxJQUFLO1NBQ3ZCLGdCQUFnQixDQUFDLEtBQU07U0FDdkIsZ0JBQWdCLENBQUMsS0FBTTtRQUg1QjtBQUtGLENBTkY7O2VBUWdCLE87Ozs7Ozs7Ozs7O0FDUmhCLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxTQUFELEVBQVksVUFBWixFQUF3QixVQUF4QixLQUF1QztBQUM5RCxTQUFPO0FBQUUsSUFBQSxJQUFJLEVBQUUsU0FBUjtBQUFtQixJQUFBLEtBQUssRUFBRSxVQUExQjtBQUFzQyxJQUFBLEtBQUssRUFBRTtBQUE3QyxHQUFQO0FBQ0QsQ0FGSDs7ZUFJaUIsa0I7Ozs7Ozs7Ozs7QUNKakIsTUFBTSxpQkFBaUIsR0FBRztBQUN0QixFQUFBLGNBQWMsRUFBRyxVQUFELElBQWdCO0FBQzVCLFdBQU8sS0FBSyxDQUFDLGdDQUFELEVBQW1DO0FBQzNDLE1BQUEsTUFBTSxFQUFFLE1BRG1DO0FBRTNDLE1BQUEsT0FBTyxFQUFFO0FBQ0wsd0JBQWdCO0FBRFgsT0FGa0M7QUFLM0MsTUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxVQUFmO0FBTHFDLEtBQW5DLENBQVo7QUFPSCxHQVRxQjtBQVV0QixFQUFBLGNBQWMsRUFBRSxNQUFNO0FBQ2xCLFdBQU8sS0FBSyxDQUFDLGdDQUFELENBQUwsQ0FDTixJQURNLENBQ0QsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFGLEVBREosQ0FBUDtBQUVIO0FBYnFCLENBQTFCO2VBZ0JlLGlCOzs7Ozs7Ozs7OztBQ2hCZjs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU0sV0FBVyxHQUFHO0FBQ2xCLEVBQUEsU0FBUyxFQUFFLE1BQU07QUFDZixXQUFROzs7Ozs7Ozs7V0FBUjtBQVVELEdBWmlCO0FBYWxCLEVBQUEsa0JBQWtCLEVBQUUsTUFBTTtBQUN0QixJQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLGdCQUFsQyxDQUFtRCxPQUFuRCxFQUE0RCxNQUFNO0FBQ2hFLFVBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxFQUFiLEtBQW9CLGNBQXZCLEVBQXNDO0FBR2xDLGNBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGVBQXZCLEVBQXdDLEtBQXhEO0FBQ0EsY0FBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDLEtBQTFEO0FBQ0EsY0FBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDLEtBQTFEO0FBR0EsY0FBTSxZQUFZLEdBQUcsNkJBQW1CLE9BQW5CLEVBQTRCLFFBQTVCLEVBQXNDLFFBQXRDLENBQXJCOztBQUdBLG1DQUFrQixjQUFsQixDQUFpQyxZQUFqQyxFQUNDLElBREQsQ0FDTSxNQUFNO0FBRVI7QUFDSCxTQUpEO0FBTUg7QUFFRixLQXBCRDtBQXFCSDtBQW5DaUIsQ0FBcEI7ZUFzQ2UsVzs7Ozs7Ozs7Ozs7QUMxQ2Y7O0FBQ0E7Ozs7QUFFQTtBQUdBLE1BQU0sV0FBVyxHQUFHLE1BQU07QUFDdEIsNkJBQWtCLGNBQWxCLEdBQ0MsSUFERCxDQUNNLFFBQVEsSUFBSTtBQUNkLElBQUEsUUFBUSxDQUFDLE9BQVQsQ0FBaUIsYUFBYSxJQUFJO0FBQzlCLE1BQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsU0FBbEMsSUFBK0Msc0JBQWEsYUFBYixDQUEvQztBQUNILEtBRkQ7QUFJSCxHQU5EO0FBT0gsQ0FSRDs7ZUFVZSxXOzs7Ozs7QUNoQmY7O0FBQ0E7Ozs7QUFJQSxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxTQUFsQyxHQUE4QyxxQkFBWSxTQUFaLEVBQTlDOztBQUdBLHFCQUFZLGtCQUFaOztBQUdBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgQ29udGFjdCA9IChzaW5nbGVDb250YWN0T2JqKSA9PiB7XHJcbiAgICByZXR1cm4gYCA8ZGl2IGNsYXNzPVwiY2FyZFwiIGlkPVwiY29udGFjdC1jYXJkXCI+XHJcbiAgICA8aDM+JHtzaW5nbGVDb250YWN0T2JqLm5hbWV9PC9oMz5cclxuICAgIDxwPiR7c2luZ2xlQ29udGFjdE9iai5waG9uZX08L3A+XHJcbiAgICA8cD4ke3NpbmdsZUNvbnRhY3RPYmouZW1haWx9PC9wPlxyXG4gPC9kaXY+YFxyXG4gfVxyXG5cclxuIGV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7IiwiY29uc3QgYnVpbGRDb250YWN0T2JqZWN0ID0gKG5hbWVQYXJhbSwgZW1haWxQYXJhbSwgcGhvbmVQYXJhbSkgPT4ge1xyXG4gICAgcmV0dXJuIHsgbmFtZTogbmFtZVBhcmFtLCBlbWFpbDogZW1haWxQYXJhbSwgcGhvbmU6IHBob25lUGFyYW0gfTtcclxuICB9O1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBidWlsZENvbnRhY3RPYmplY3Q7IiwiY29uc3QgQ29udGFjdENvbGxlY3Rpb24gPSB7XHJcbiAgICBzYXZlTmV3Q29udGFjdDogKGNvbnRhY3RPYmopID0+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvY29udGFjdHNcIiwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb250YWN0T2JqKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgZ2V0QWxsQ29udGFjdHM6ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvY29udGFjdHNcIilcclxuICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Q29sbGVjdGlvbjsiLCJpbXBvcnQgQ29udGFjdENvbGxlY3Rpb24gZnJvbSBcIi4vQ29udGFjdENvbGxlY3Rpb25cIjtcclxuaW1wb3J0IGJ1aWxkQ29udGFjdE9iamVjdCBmcm9tIFwiLi9Db250YWN0QnVpbGRlclwiO1xyXG5pbXBvcnQgQ29udGFjdExpc3QgZnJvbSBcIi4vQ29udGFjdExpc3RcIjtcclxuXHJcbmNvbnN0IENvbnRhY3RGb3JtID0ge1xyXG4gIGJ1aWxkRm9ybTogKCkgPT4ge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtXCIgaWQ9XCJjb250YWN0LWZvcm1cIj5cclxuICAgICAgPGgzPkFkZCBhIE5ldyBDb250YWN0PC9oMz5cclxuICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjb250YWN0LW5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIGlkPVwiY29udGFjdC1waG9uZVwiIHBsYWNlaG9sZGVyPVwiUGhvbmVcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJjb250YWN0LWVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxidXR0b24gaWQ9XCJzYXZlLWNvbnRhY3RcIj5TYXZlIENvbnRhY3Q8L2J1dHRvbj5cclxuICAgIDwvZGl2PmA7XHJcbiAgfSxcclxuICBhY3RpdmF0ZVNhdmVCdXR0b246ICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBpZihldmVudC50YXJnZXQuaWQgPT09IFwic2F2ZS1jb250YWN0XCIpe1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWVWYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtbmFtZVwiKS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgcGhvbmVWYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtcGhvbmVcIikudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsVmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LWVtYWlsXCIpLnZhbHVlO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG9iamVjdFRvUG9zdCA9IGJ1aWxkQ29udGFjdE9iamVjdChuYW1lVmFsLCBwaG9uZVZhbCwgZW1haWxWYWwpXHJcblxyXG5cclxuICAgICAgICAgICAgQ29udGFjdENvbGxlY3Rpb24uc2F2ZU5ld0NvbnRhY3Qob2JqZWN0VG9Qb3N0KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgQ29udGFjdExpc3QoKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSlcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTsiLCJpbXBvcnQgQnVpbGRDb250YWN0IGZyb20gXCIuL0NvbnRhY3QuanNcIlxyXG5pbXBvcnQgQ29udGFjdENvbGxlY3Rpb24gZnJvbSBcIi4vQ29udGFjdENvbGxlY3Rpb24uanNcIlxyXG5cclxuLy8gQSBDb250YWN0TGlzdCBjb21wb25lbnQgdGhhdCBkaXNwbGF5cyBhbGwgY29udGFjdHMuIEl0IHNob3VsZCBpbXBvcnQgdGhlIENvbnRhY3QgY29tcG9uZW50IGFuZCB0aGUgQ29udGFjdENvbGxlY3Rpb24gY29tcG9uZW50LlxyXG5cclxuXHJcbmNvbnN0IENvbnRhY3RMaXN0ID0gKCkgPT4ge1xyXG4gICAgQ29udGFjdENvbGxlY3Rpb24uZ2V0QWxsQ29udGFjdHMoKVxyXG4gICAgLnRoZW4oY29udGFjdHMgPT4ge1xyXG4gICAgICAgIGNvbnRhY3RzLmZvckVhY2goc2luZ2xlQ29udGFjdCA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpLmlubmVySFRNTCArPSBCdWlsZENvbnRhY3Qoc2luZ2xlQ29udGFjdCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0TGlzdDsiLCJpbXBvcnQgQ29udGFjdExpc3QgZnJvbSBcIi4vQ29udGFjdExpc3QuanNcIlxyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSBcIi4vQ29udGFjdEZvcm0uanNcIlxyXG5cclxuXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKS5pbm5lckhUTUwgPSBDb250YWN0Rm9ybS5idWlsZEZvcm0oKTtcclxuXHJcblxyXG5Db250YWN0Rm9ybS5hY3RpdmF0ZVNhdmVCdXR0b24oKVxyXG5cclxuXHJcbkNvbnRhY3RMaXN0KCkiXX0=
