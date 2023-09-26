import Model from "../model/model.js";
import nagykepView from "../view/nagykepView.js";

class Controller{
    constructor(){
        const MODEL = new Model();
        const Nagykep = new nagykepView($(".nagykep"), MODEL.getAktKep())
        $(window).on("bal", ()=>{
            MODEL.bal()
            let aktKep = MODEL
        })
    }
}

export default Controller