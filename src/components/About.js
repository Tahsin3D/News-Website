import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
    constructor(props)
    {
        super(props);
        document.title = `News - ${this.props.category[0].toUpperCase()+this.props.category.slice(1)}`
    }
  render() {
    return (
        <div className="text-center container my-3">
            
            <header>
                <h1>About Us</h1>
            </header>

            <div className="container">
            <main className='text-center'>
                <section className="intro">
                    <h2 >Welcome to News Website</h2>
                    <p>At News Website, we strive to bring you the most up-to-date and reliable news from around the world. Our team of dedicated journalists works around the clock to ensure that you have access to timely and accurate information.</p>
                </section>

                <section className="categories">
                    <h2>Our News Categories</h2>
                    <ul style={{listStyle:"none"}}>
                        <li><Link to="/general">World News</Link></li>
                        <li><Link to="/technology">Technology</Link></li>
                        <li><Link to="/sports">Sports</Link></li>
                        <li><Link to="/entertainment">Entertainment</Link></li>
                        <li><Link to="/health">Health</Link></li>
                        <li><Link to="/science">Science</Link></li>
                        <li><Link to="/business">Business</Link></li>
                    </ul>
                </section>

                <section className="team">
                    <div className="team-member">
                        <h3>Tahsin Haider</h3>
                        <p>Computer Science Student</p>
                    </div>
                    {/* Add more team members as needed */}
                </section>
            </main>

            </div>
            <footer>
                <p>&copy; 2024 News Website. All rights reserved.</p>
            </footer>
        </div>
    )
  }
}