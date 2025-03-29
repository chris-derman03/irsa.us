import AccidentTypes from "./AccidentTypes/AccidentTypes";

const HomePageDescription = () => {
    return (
        <div className="flex flex-col gap-10 text-center">
            <h1 className="text-6xl">IRSA</h1>

            <p className="text-lg">
                Our organization of nearly two dozen staff and consisting of
                both The Institute of Risk and Safety Analyses (The Institute)
                and The Laboratory of Risk and Safety Analyses (The Lab) are
                dedicated to applying the tools of forensic engineering to
                scientifically diagnose and resolve safety challenges,
                accidents, and/or criminal activities.
                <br />
                <br />
                The Institute (established 1974) uses principles of Physical
                Science, Mathematics, Computer Science, 3D Reconstruction and
                Simulation as well as related disciplines in order to formulate
                analyses in the fields of Accident Reconstruction, Biomechanics,
                and Human Factors. The Institute has applied these skills across
                a broad set of applications to fields including but not limited
                to:
            </p>

            <AccidentTypes />
        </div>
    );
};

export default HomePageDescription;
