import A from "@/components/OnClick"

export default function Home() {
  const text = 'this is the text'

  const log = (yamarchhamaagui) => {
    alert(yamarchhamaagui)
  };

  return <>
  <A text={text} haha={log} />
  </>
}