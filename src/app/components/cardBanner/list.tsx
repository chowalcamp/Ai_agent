import BannerCard from './BannerCard'
import './list.css'
export default function List() {
    return (
        <div className="wrapper">
            <h2>More Reasons to Join</h2>
                <div className="list">
                    <BannerCard title="Enjoy on your TV" subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more." />
                    <BannerCard title="Download your
shows to watch
offline" subtitle="Save your favorites easily and always have something to watch." />
                    <BannerCard title="Watch everywhere" subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV." />
                    <BannerCard title="Create profiles for
kids" subtitle="Send kids on adventures with their favorite characters in a space made just for them — free with your membership." />
                </div>
        </div>
    )
}