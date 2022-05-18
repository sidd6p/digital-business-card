export default function Intro() {
    return (
        <div className="intro">
            <img src="./profile_photo.jpeg" alt="Siddhartha Profile Photo" />
            <div classname="details">
                <h2>Siddhartha Purwar</h2>
                <h3>Aspiring Full-Stack Developer</h3>
                <a href="https://github.com/sidd6p/">Website</a>
                <div className="address">
                    <a className="email" href="">
                        <img src="./email_icon.png" />
                        <div>Email</div>
                    </a>
                    <a className="linkedin" href="">
                        <img src="./linkedin_icon.png" />
                        <div>LinkedIn</div>
                    </a>
                </div>
            </div>
        </div>
    )
}