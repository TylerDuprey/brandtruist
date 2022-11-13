import Button from '../Button'

const Buttons = () => {

  const buttons = [
    {
      slug: "#button-one",
      content: 'Sample Button One',
      title: 'Sample button one title'
    },
    {
      slug: "#button-two",
      content: 'Sample Button Two',
      title: 'Sample button two title'
    }
  ]

  return (
    <div className="btns">
      {
        buttons.map( (button, index) => <Button key={index} className={`button-${index} btn`} button={button} /> )
      }
    </div>
  )
}

export default Buttons