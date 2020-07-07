import * as React from 'react'
import {Button, Card, Typography } from "@material-ui/core";



function SavedQuestions() {


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


export default SavedQuestions