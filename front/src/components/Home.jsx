import { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/Home.scss';

export default function Home() {
    const [jeux, setJeux] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchJeux = async () => {
            try {
                const jeuxRes = await axios.get('http://localhost:3000/jeux');
                const jeuxRecuperes = jeuxRes.data;
                const userRes = await axios.get('http://localhost:3000/utilisateurs');
                const userRecuperes = userRes.data;
                setUser(userRecuperes);
                setJeux(jeuxRecuperes);
            } catch (error) {
                console.error(error);
            }
        }

        fetchJeux();
    }, []);

    return (
        <div className='content'>
            <div className="header">
                <div className="logo">
                    <span>SCAM</span>
                </div>
                <div className="searchbar">
                    <input type="text" placeholder="Recherche"/>
                </div>
                <div className="login-btn">
                    <div className="login">
                        <span>LOGIN</span>
                    </div>
                    <div className="register">
                        <span>REGISTER</span>
                    </div>
                </div>
            </div>
            <div className="h2">
                <h2>RECOMMENDED GAMES</h2>
            </div>
            <div className="carousel">
                <div className="cards">
                    <div className="card">
                        <div className="title">
                            <span>GTA 6</span>
                        </div>
                        <div className="note">
                            <span>4</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="title">
                            <span>GTA 6</span>
                        </div>
                        <div className="note">
                            <span>4</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="title">
                            <span>GTA 6</span>
                        </div>
                        <div className="note">
                            <span>4</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="title">
                            <span>GTA 6</span>
                        </div>
                        <div className="note">
                            <span>4</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="title">
                            <span>GTA 6</span>
                        </div>
                        <div className="note">
                            <span>4</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="title">
                            <span>GTA 6</span>
                        </div>
                        <div className="note">
                            <span>4</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="cards">
                    <div className="card">
                        <div className="image"></div>
                        <div className="resume">
                            <div className="title">
                                <span>TITLE</span>
                            </div>
                            <div className="price">
                                <span>9.99$</span>
                            </div>
                            <div className="note">
                                <span>4</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image"></div>
                        <div className="resume">
                            <div className="title">
                                <span>TITLE</span>
                            </div>
                            <div className="price">
                                <span>9.99$</span>
                            </div>
                            <div className="note">
                                <span>4</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image"></div>
                        <div className="resume">
                            <div className="title">
                                <span>TITLE</span>
                            </div>
                            <div className="price">
                                <span>9.99$</span>
                            </div>
                            <div className="note">
                                <span>4</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image"></div>
                        <div className="resume">
                            <div className="title">
                                <span>TITLE</span>
                            </div>
                            <div className="price">
                                <span>9.99$</span>
                            </div>
                            <div className="note">
                                <span>4</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image"></div>
                        <div className="resume">
                            <div className="title">
                                <span>TITLE</span>
                            </div>
                            <div className="price">
                                <span>9.99$</span>
                            </div>
                            <div className="note">
                                <span>4</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image"></div>
                        <div className="resume">
                            <div className="title">
                                <span>TITLE</span>
                            </div>
                            <div className="price">
                                <span>9.99$</span>
                            </div>
                            <div className="note">
                                <span>4</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image"></div>
                        <div className="resume">
                            <div className="title">
                                <span>TITLE</span>
                            </div>
                            <div className="price">
                                <span>9.99$</span>
                            </div>
                            <div className="note">
                                <span>4</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h2">
                    <h2>ALL GAMES</h2>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="image"></div>
                        <div className="resume">
                            <div className="title">
                                <span>TITLE</span>
                            </div>
                            <div className="price">
                                <span>9.99$</span>
                            </div>
                            <div className="note">
                                <span>4</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}