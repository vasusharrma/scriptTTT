type Parent = {
  name: string
  childName: string
  phoneno: number | string
}

type Teacher = {
  name: string
  phoneno: number | string
  salary: number | string
  course: string
}

interface HOD {
  name: string
  department: string
}

type All = Parent & Teacher & HOD

const DrGesuThakur: All = {
  name: "Gesu",
  childName: "Shubh",
  phoneno: "9999999999",
  salary: "60000",
  course: "MCA",
  department: "Computer Applicatons"
}


console.log(DrGesuThakur)
