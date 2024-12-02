import PeopleList from "../lists/PeopleList"

export default function VisitorsView() {

    const VISITORS = [
        {
            id: "1",
            name: "Mikhael jasper",
            gender: "M",
            joined: "22-10-2020",
            contact: "+256 745201484",
            address: "Mukono"
        },
        {
            id: "2",
            name: "Josephine Daphine",
            gender: "F",
            joined: "22-10-2020",
            contact: "+256 745201484",
            address: "Makindye"
        },
        {
            id: "3",
            name: "Bruno navi",
            gender: "M",
            joined: "22-10-2020",
            contact: "+256 745201484",
            address: "Ndeeba"
        },
        {
            id: "4",
            name: "Sera Baibe",
            gender: "F",
            joined: "22-10-2020",
            contact: "+256 745201484",
            address: "Masaka"
        },
        {
            id: "5",
            name: "Jubilee Gold",
            gender: "M",
            joined: "22-10-2020",
            contact: "+256 745201484",
            address: "Makindye"
        },
        {
            id: "6",
            name: "Henry serunjogi",
            gender: "M",
            joined: "22-10-2020",
            contact: "+256 745201484",
            address: "Mukono"
        }
    ]

  return (
    <PeopleList people={VISITORS}/>
  )
}
