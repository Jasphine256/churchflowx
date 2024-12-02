import PeopleList from "../lists/PeopleList"

export default function PastorsView() {

    const PASTORS = [
        {
            id: "1",
            name: "Solomon Mubinda",
            gender: "M",
            joined: "22-10-2020",
            contact: "+256 745201484",
            address: "Mukono"
        },
        {
            id: "2",
            name: "Samuel Mulindwa",
            gender: "M",
            joined: "22-10-2020",
            contact: "+256 745201484",
            address: "Makindye"
        },
        {
            id: "3",
            name: "Joshua Serwadda",
            gender: "M",
            joined: "22-10-2020",
            contact: "+256 745201484",
            address: "Ndeeba"
        },
        {
            id: "4",
            name: "Abas Kirabira",
            gender: "F",
            joined: "22-10-2020",
            contact: "+256 745201484",
            address: "Masaka"
        },
        {
            id: "5",
            name: "Julie Namata",
            gender: "F",
            joined: "22-10-2020",
            contact: "+256 745201484",
            address: "Makindye"
        },
        {
            id: "6",
            name: "Silver Onyango",
            gender: "M",
            joined: "22-10-2020",
            contact: "+256 745201484",
            address: "Mukono"
        }
    ]

  return (
    <PeopleList people={PASTORS}/>
  )
}
