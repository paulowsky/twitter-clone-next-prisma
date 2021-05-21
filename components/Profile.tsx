import { Row, Col, Button, message } from 'antd'
import { SignupForm } from './SignUpForm'
import { useMe } from './util/hooks'
import { useState } from 'react'
import { LogoutButton } from "./LogoutButton"

export const Profile = () => {
    const { me } = useMe()
    const [loading, setLoading] = useState(false)
    if (!me) return null

    return (
        <Row style={{ padding: '1.5rem' }}>
            {!me.username ? (
                <SignupForm />
            ) : (
                <Col>
                    Logged in as: <strong>{me.username}</strong>
                    <br/>
                    <LogoutButton  />
                </Col>
            )}
        </Row>
    )
}
