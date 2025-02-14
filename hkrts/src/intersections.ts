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


interface DEAN extends HOD {
  college: string
}

type All = Parent & Teacher & HOD;

const DrGesuThakur: All = {
  name: "Gesu",
  childName: "Shubh",
  phoneno: "9999999999",
  salary: "60000",
  course: "MCA",
  department: "Computer Applicatons"
}


console.log(DrGesuThakur)

function clltwoFun(fn1: () => void, fn2: (ar: string, nm: number) => string): string {
  fn1();
  fn2("smelse", 22);
  return "something";
}



