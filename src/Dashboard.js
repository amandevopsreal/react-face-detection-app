import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        uses: 0
    })
    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const onEdit = async () => {
        const response = await fetch(`http://localhost:5000/api/auth/updateuser`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ name: user.name, email: user.email }),
        });
        const json = await response.json()
        console.log(json)
    }
    useEffect(() => {
        const getUser = async () => {
            const response = await fetch("http://localhost:5000/api/auth/getUser", {
                method: "post",
                headers: { "Content-Type": "application/json", "auth-token": localStorage.getItem("token") },

            })
            const json = await response.json()
            setUser({ name: json.name, email: json.email, uses: json.uses })
            console.log(json)
        }
        getUser()
    }, [])
    return (
        <>
            <article class="br3 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                <div className="box">
                    <div className="outdiv">
                        <h2>Account Details</h2>
                        <div className="inputBox">
                            <input value={user.name} type="text" required="required" id="name" name='name' onChange={onChange} />
                            <span>Name</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input value={user.email} type="text" required="required" id="email" name='email' onChange={onChange} />
                            <span>E-mail</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input value={user.uses} type="text" required="required" id="uses" name='uses' />
                            <span>Uses</span>
                            <i></i>
                        </div>
                        <input onClick={onEdit} type="submit" value="Edit" />
                    </div>
                </div>
            </article>
        </>

    )
}

export default Dashboard