import React from 'react'
import { Container, Form, Checkbox, Button, Label } from 'semantic-ui-react'
import Utils from '../utils/Utils'

const Contact = () => (
    <Container>
        <Label attached='bottom right' content={Utils.socialMediaMenu()} />
        <Form>
            <Form.Field>
                <label>First and Last Name</label>
                <input placeholder='First Name and Last Name' />
            </Form.Field>
            <Form.TextArea
                label='What is your query?'
                placeholder='Questions, Comments, Commissions and Job offers' />
            <Form.Field>
                <Checkbox
                    label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Send</Button>

        </Form>
    </Container>
)


export default Contact