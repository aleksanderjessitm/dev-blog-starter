interface Props {
    heading: string;
    subheading: string;
    buttonText: string;
    buttonHref: string;
}

function Jumbotron({heading, subheading, buttonHref, buttonText}: Props) {
    return (
        <div className="h-[70vh] flex flex-col items-center justify-center  text-center from-green-600 to-green-900 bg-gradient-to-b text-gray-200 py-20 px-6">
            <h1 className="text-5xl font-bold mt-0 mb-6">{heading}</h1>
            <h3 className="text-3xl font-bold mb-8">{subheading}</h3>
            <a className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href={buttonHref} role="button">{buttonText}</a>
        </div>
    )
}

export default Jumbotron