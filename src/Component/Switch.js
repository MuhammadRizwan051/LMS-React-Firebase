import Switch from '@mui/material/Switch'

function SMSwitch(props) {
    const {label, onChange, value} = props

  return (
    <>
      <Switch checked={value} label={label} onChange={onChange} value={value} />
    </>
  )
}

export default SMSwitch