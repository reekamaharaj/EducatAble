import * as React from 'react'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

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

  const [save, setSave] = React.useState(true)

  const handleSave = () => {
    if (save === false) {
      unsavedQs()
      alert('Your question has been unsaved!')
    } else {
      savedQs()
      alert('Your question has been saved!')
    }

    setSave(!save)
  }

  const savedQs = () => {
    axios
      .post('/api/SavedQuestions')
      .then((result) => {
        if (result.status === 200) {
          return alert('Question saved!')
        } else {
          return alert('Something happened!')
        }
      })
      .catch((err) => console.log(err))
  }
  const unsavedQs = () => {
    axios.post('/api/UnsavedQuestions').then((result) => {
      if (result.status === 200) {
        return alert('Your question was unsaved!')
      } else {
        return alert('Something happened')
      }
    })
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
