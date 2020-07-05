import * as React from 'react'
import API from '../../utils/API'
import {Button, Card, Typography } from "@material-ui/core";
import { render } from 'react-dom'

class SavedQuestions extends Component {

state = {
    savedQuestion: [],
}

componentDidMount() {
    API.savedQuestion()
    .then(savedQuestion => this.setState({ savedQuestion: savedQuestion}))
    .catch(err => console.error(err))
}

handleSave = question => {
    if(this.state.savedQuestion.map(question => question._id).includes(question._id)) {
        deleteQuestion(question._id)
        .then(deleteQuestion => this.setState({savedQuestion: this.state.savedQuestion
        .filter(question => question._id !== deleteQuestion._id)}))
    } else {
        API.saveQuestion(question)
        .then(savedQuestion => this.setState({savedQuestion: this.state.savedQuestion
        .concat([savedQuestion])}))
        .catch(err => console.error(err))
    }
}


render() {
    return (
        <div> 
           {!this.props.question.length ? (
            <Typography variant='h5'>No Questions Saved</Typography>
           ) : (
              <div>
                  {this.props.question.map(result => (
                      <div>
                          <Card key={result.id}></Card>
                          <Button onClick={() => this.handleSave(result)}>{this.state.savedQuestion.map(question => question._id).includes(result._id) ? 'Unsave' : 'Save'}</Button>
                      </div>
                  ))}
              </div> 
           )} 
        </div>
      )
}
}

export default SavedQuestions