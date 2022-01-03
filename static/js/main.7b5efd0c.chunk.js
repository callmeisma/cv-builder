(this["webpackJsonpcv-builder"]=this["webpackJsonpcv-builder"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),l=n.n(c),s=n(9),o=n.n(s),i=n(2),r=n(3),d=n(5),h=n(4),j=(n(16),n(10)),u=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleInputChange=function(e){e.preventDefault(),a.setState(Object(j.a)({},e.target.name,e.target.value))},a.state={name:"First Last",email:"email@email.com",phone:"123.456.7890"},a}return Object(r.a)(n,[{key:"render",value:function(){return this.props.editMode?Object(a.jsxs)("div",{className:"flex-col form-cont",children:[Object(a.jsx)("h5",{children:"General"}),Object(a.jsxs)("div",{className:"flex-row form-cont",children:[Object(a.jsxs)("div",{className:"flex-col",children:[Object(a.jsx)("label",{children:"Name"}),Object(a.jsx)("input",{type:"text",name:"name",onChange:this.handleInputChange,value:this.state.name})]}),Object(a.jsxs)("div",{className:"flex-col",children:[Object(a.jsx)("label",{children:"Email"}),Object(a.jsx)("input",{type:"email",name:"email",onChange:this.handleInputChange,value:this.state.email})]}),Object(a.jsxs)("div",{className:"flex-col",children:[Object(a.jsx)("label",{children:"Phone"}),Object(a.jsx)("input",{type:"tel",name:"phone",onChange:this.handleInputChange,value:this.state.phone})]})]})]}):Object(a.jsxs)("div",{className:"flex-col form-cont",children:[Object(a.jsx)("h1",{className:"name",children:this.state.name}),Object(a.jsxs)("div",{className:"flex-row",children:[Object(a.jsxs)("p",{children:["e: ",this.state.email]}),Object(a.jsxs)("p",{children:["t: ",this.state.phone]})]})]})}}]),n}(c.Component),b=n(6),m=n(7),x=n.n(m),O=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleInputChange=function(e,t){e.preventDefault();var n=Object(b.a)(a.state.allSchools);n[t][e.target.name]=e.target.value,a.setState({allSchools:n})},a.handleAddClick=function(){a.setState({allSchools:[].concat(Object(b.a)(a.state.allSchools),[{schoolName:"",field:"",startEduDate:"",endEduDate:""}])})},a.handleRemoveClick=function(e){var t=Object(b.a)(a.state.allSchools);t.splice(e,1),a.setState({allSchools:t})},a.state={allSchools:[{schoolName:"School University",field:"Field of Study",startEduDate:"2021-01",endEduDate:"2022-01"}]},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return this.props.editMode?Object(a.jsxs)("div",{className:"flex-col form-cont",children:[Object(a.jsx)("h5",{children:"Education"}),this.state.allSchools.map((function(t,n){return Object(a.jsxs)("div",{className:"flex-row form-cont form-mini",children:[Object(a.jsxs)("div",{className:"flex-col",children:[Object(a.jsx)("label",{children:"School"}),Object(a.jsx)("input",{type:"text",name:"schoolName",onChange:function(t){return e.handleInputChange(t,n)},value:t.schoolName})]}),Object(a.jsxs)("div",{className:"flex-col",children:[Object(a.jsx)("label",{children:"Field of Study"}),Object(a.jsx)("input",{type:"text",name:"field",onChange:function(t){return e.handleInputChange(t,n)},value:t.field})]}),Object(a.jsxs)("div",{className:"flex-col",children:[Object(a.jsx)("label",{children:"Date Started"}),Object(a.jsx)("input",{type:"month",name:"startEduDate",onChange:function(t){return e.handleInputChange(t,n)},value:t.startEduDate})]}),Object(a.jsxs)("div",{className:"flex-col",children:[Object(a.jsx)("label",{children:"Date Completed"}),Object(a.jsx)("input",{type:"month",name:"endEduDate",onChange:function(t){return e.handleInputChange(t,n)},value:t.endEduDate})]}),Object(a.jsxs)("div",{className:"flex-row",children:[e.state.allSchools.length-1===n&&Object(a.jsx)("button",{className:"btn",onClick:function(){return e.handleAddClick()},children:"+"}),1!==e.state.allSchools.length&&Object(a.jsx)("button",{className:"btn",onClick:function(){return e.handleRemoveClick(n)},children:"-"})]})]},"value".concat(n+1))}))]}):Object(a.jsxs)("div",{className:"flex-col form-cont",children:[Object(a.jsx)("h5",{children:"Education"}),this.state.allSchools.map((function(e){return Object(a.jsxs)("div",{className:"flex-col form-cont form-mini",children:[Object(a.jsx)("h4",{children:e.field}),Object(a.jsxs)("p",{children:[e.schoolName," | ",e.startEduDate," - ",e.endEduDate]})]},x()())}))]})}}]),n}(c.Component),f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleInputChange=function(e,t){e.preventDefault();var n=Object(b.a)(a.state.allWork);n[t][e.target.name]=e.target.value,a.setState({allWork:n})},a.handleAddClick=function(){a.setState({allWork:[].concat(Object(b.a)(a.state.allWork),[{companyName:"",position:"",tasks:"",startWorkDate:"",endWorkDate:""}])})},a.handleRemoveClick=function(e){var t=Object(b.a)(a.state.allWork);t.splice(e,1),a.setState({allWork:t})},a.state={allWork:[{companyName:"Company Abc",position:"Manager",tasks:"Work Work Work",startWorkDate:"2021-01",endWorkDate:"2022-01"}]},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return this.props.editMode?Object(a.jsxs)("div",{className:"flex-col form-cont",children:[Object(a.jsx)("h5",{children:"Experience"}),this.state.allWork.map((function(t,n){return Object(a.jsxs)("div",{className:"flex-row form-cont form-mini",children:[Object(a.jsxs)("div",{className:"flex-col",children:[Object(a.jsx)("label",{children:"Company Name"}),Object(a.jsx)("input",{type:"text",name:"companyName",onChange:function(t){return e.handleInputChange(t,n)},value:t.companyName})]}),Object(a.jsxs)("div",{className:"flex-col",children:[Object(a.jsx)("label",{children:"Position"}),Object(a.jsx)("input",{type:"text",name:"position",onChange:function(t){return e.handleInputChange(t,n)},value:t.position})]}),Object(a.jsxs)("div",{className:"flex-col",children:[Object(a.jsx)("label",{children:"Work Done"}),Object(a.jsx)("input",{name:"tasks",onChange:function(t){return e.handleInputChange(t,n)},value:t.tasks})]}),Object(a.jsxs)("div",{className:"flex-col",children:[Object(a.jsx)("label",{children:"Date Started"}),Object(a.jsx)("input",{type:"month",name:"startWorkDate",onChange:function(t){return e.handleInputChange(t,n)},value:t.startWorkDate})]}),Object(a.jsxs)("div",{className:"flex-col",children:[Object(a.jsx)("label",{children:"Date Completed"}),Object(a.jsx)("input",{type:"month",name:"endWorkDate",onChange:function(t){return e.handleInputChange(t,n)},value:t.endWorkDate})]}),Object(a.jsxs)("div",{children:[e.state.allWork.length-1===n&&Object(a.jsx)("button",{className:"btn",onClick:function(){return e.handleAddClick()},children:"+"}),1!==e.state.allWork.length&&Object(a.jsx)("button",{className:"btn",onClick:function(){return e.handleRemoveClick(n)},children:"-"})]})]},"value".concat(n+1))}))]}):Object(a.jsxs)("div",{className:"flex-col form-cont",children:[Object(a.jsx)("h5",{children:"Experience"}),this.state.allWork.map((function(e){return Object(a.jsxs)("div",{className:"flex-col form-cont form-mini",children:[Object(a.jsx)("h4",{children:e.position}),Object(a.jsxs)("p",{children:[e.companyName," | ",e.startWorkDate," -"," ",e.endWorkDate]}),Object(a.jsx)("p",{children:e.tasks})]},x()())}))]})}}]),n}(c.Component),p=function(e){return e.editMode?Object(a.jsx)("button",{className:"btn-preview",onClick:e.changeMode,children:"Preview"}):Object(a.jsx)("button",{className:"btn-edit",onClick:e.changeMode,children:"Edit"})},v=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).toggleMode=function(){e.state.editMode?e.setState({editMode:!1}):e.setState({editMode:!0})},e.state={editMode:!0},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)(p,{editMode:this.state.editMode,changeMode:this.toggleMode})}),Object(a.jsx)(u,{editMode:this.state.editMode}),Object(a.jsx)(O,{editMode:this.state.editMode}),Object(a.jsx)(f,{editMode:this.state.editMode})]})}}]),n}(c.Component);o.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7b5efd0c.chunk.js.map