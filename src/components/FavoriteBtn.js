import * as React from 'react'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
  save: {
    backgroundColor: '#4f88b1',
    margin: '5px',
    color: 'pink'
  },
  unsave: {
    backgroundColor: '#4f88b1',
    margin: '5px',
    color: 'white'
  }
})

function FavoriteBtn() {
  const classes = useStyle()

  const [save, setSave] = React.useState(true);

  const handleSave = () => {
    if(save === false){
     alert('Your question has been unsaved!')
    } else {alert('Your question has been saved!')}
      setSave(!save)
  }

  return (
    <>
      {save ? (
        <Button className={classes.unsave} onClick={handleSave}>
          <Icon>favorite</Icon>
        </Button>
      ) : (
        <Button className={classes.save} onClick={handleSave}>
          <Icon>favorite</Icon>
        </Button>
      )}
    </>
  )
}

export default FavoriteBtn
