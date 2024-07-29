class WeekDays {
    daysEs = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    daysEn = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

    static getInstance() {
        return WeekDays.instance;
    }

    constructor(lang) {
        this.lang =  lang;

        if (WeekDays.instance) {
            return WeekDays.instance;
        }
        WeekDays.instance = this;
    }

    getDays(){
        return this.lang === "es" ?
        this.daysEs :
        this.daysEn;
    }
}
const diasSemana = new WeekDays("en");
const diasSemana2 =  new WeekDays("es");
console.log(diasSemana.getDays())
console.log(diasSemana2.getDays())

