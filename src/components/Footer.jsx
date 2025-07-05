import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
                <div>
                    <h2 className="text-2xl font-bold text-white">Utkarsh Singh</h2>
                    <p className="mt-2 hover:text-white cursor-pointer"><a href="https://portfolioutk.netlify.app/">Portfolio website</a></p>
                </div>
                <div>
                    <ul className="space-y-2 text-center md:text-left">
                        <li className="hover:text-white cursor-pointer"><a href="https://www.openweathermap.org/">OpenWeatherMap</a></li>
                        <li className="hover:text-white cursor-pointer"></li>
                        <li className="hover:text-white cursor-pointer"><a href="mailto:utkarshsingh2513@gmail.com">Contact Me</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <a href="https://www.linkedin.com/in/utkarshsingh3926/" target="_blank" className="hover:text-white">LinkedIn</a>
                    <a href="https://github.com/Utkarshsingh4147" target="_blank" className="hover:text-white">GitHub</a>
                    <a href="https://www.instagram.com/utkarsh_singh_3926/" target="_blank"  className="hover:text-white">Instagram</a>
                </div>

            </div>
            <div className="mt-8 text-center text-gray-500 text-sm">
                <p>© 2025 Utkarsh. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
