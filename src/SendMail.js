import { Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from './features/mailSlice'
import  db  from './firebase'
import firebase from 'firebase'
import './SendMail.css'
function SendMail() {
  const dispatch=useDispatch()
  const {register,handleSubmit,watch,errors}=useForm()
  const onSubmit=(formData)=>{
    console.log(formData)
    db.collection('emails').add({
      to:formData.to,
      subject:formData.subject,
      message:formData.message,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    dispatch(closeSendMessage())
  }
    return (
      <div className="sendMail">
        <div className="sendMail__header">
          <h3>New Message</h3>
          <Close className="sendMail__close" onClick={()=>dispatch(closeSendMessage())}/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="to"
            type="email"
            placeholder="To"
            ref={register({ required: true })}
          />
          {errors.to && <p className='sendMail__error'>This field is reuquired!</p>}
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            ref={register({ required: true })}
          />
          {errors.subject && <p className='sendMail__error'>This field is reuquired!</p>}
          <input
            name="message"
            type="text"
            placeholder="Meassage..."
            className="sendMail__message"
            ref={register({ required: true })}
          />
          {errors.message && <p className='sendMail__error'>This field is reuquired!</p>}
          <div className="sendMailOptions">
            <Button className="sendMail__send" type="submit">
              Send
            </Button>
          </div>
        </form>
      </div>
    );
}

export default SendMail
