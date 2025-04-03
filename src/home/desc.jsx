export default function LabelImgManual() {
    return (
      <div className="p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">LabelImg User Manual for YOLO Model</h1>
        
        <h2 className="text-xl font-semibold text-gray-700">Introduction</h2>
        <p className="text-gray-600 mb-4">
          LabelImg is a graphical image annotation tool that allows users to label objects in images
          for machine learning models. This guide provides step-by-step instructions for installing
          LabelImg and using it to create annotations compatible with the YOLO (You Only Look Once) model.
        </p>

        <h2 className="text-xl font-semibold text-gray-700">1. Installation</h2>
        
        <h3 className="text-lg font-medium text-gray-700">1.1 Prerequisites</h3>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Python 3.x (Recommended: Python 3.6+)</li>
          <li>pip (Python package manager)</li>
          <li>Qt5 (for GUI support)</li>
        </ul>

        <h3 className="text-lg font-medium text-gray-700">1.2 Installation from Source</h3>
        <p className="text-gray-600">Clone the LabelImg repository from GitHub:</p>
        <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">git clone https://github.com/HumanSignal/labelImg.git</pre>

        <p className="text-gray-600">Navigate to the LabelImg directory:</p>
        <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">cd labelImg</pre>
        
        <h3 className="text-lg font-medium text-gray-700">Updating predefine_classes.txt</h3>
        <p className="text-gray-600">LabelImg allows you to predefine class labels for efficient annotation.</p>
        <p className="text-gray-600">Steps:</p>
        <ol className="list-decimal list-inside text-gray-600 mb-4">
          <li>Locate <code className="bg-gray-200 p-1 rounded">predefine_classes.txt</code> in <code className="bg-gray-200 p-1 rounded">LabelImg/data</code>.</li>
          <li>Open the file in a text editor.</li>
          <li>Add class names, one per line. Example:</li>
        </ol>
        <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">Text Inputs<br></br>
Text Areas<br></br>
Checkboxes<br></br>
Radio Buttons<br></br>
Toggles & Switches</pre>
        
        <h3 className="text-lg font-medium text-gray-700">Install dependencies:</h3>
        <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">pip install -r requirements/requirements.txt</pre>

        <h3 className="text-lg font-medium text-gray-700">Compile the resources file:</h3>
        <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">pyrcc5 -o libs/resources.py resources.qrc</pre>

        <h3 className="text-lg font-medium text-gray-700">Launch LabelImg:</h3>
        <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">python labelImg.py</pre>

        <h2 className="text-xl font-semibold text-gray-700">2. Using LabelImg for YOLO Annotation</h2>
        
        <h3 className="text-lg font-medium text-gray-700">2.1 Setting YOLO Format</h3>
        <ol className="list-decimal list-inside text-gray-600 mb-4">
          <li>Open LabelImg.</li>
          <li>Click <b>"Open Dir"</b> and select the folder containing images.</li>
          <li>Click <b>"Change Save Dir"</b> and select the output folder.</li>
          <li>Set format to YOLO: <b>View &gt; PascalVOC &gt; YOLO</b>.</li>
        </ol>

        <h3 className="text-lg font-medium text-gray-700">2.2 Annotating Images</h3>
        <ol className="list-decimal list-inside text-gray-600 mb-4">
          <li>Select an image.</li>
          <li>Click <b>"Create RectBox"</b> or press <code className="bg-gray-200 p-1 rounded">w</code>.</li>
          <li>Adjust the bounding box.</li>
          <li>Enter the class label and press Enter.</li>
          <li>Save annotation (<b>Ctrl + S</b>).</li>
          <li>Navigate using <code className="bg-gray-200 p-1 rounded">d</code> (next) or <code className="bg-gray-200 p-1 rounded">a</code> (previous).</li>
        </ol>

        <h3 className="text-lg font-medium text-gray-700">2.3 Verifying and Editing Annotations</h3>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Click a bounding box to edit.</li>
          <li>Press <code className="bg-gray-200 p-1 rounded">Delete</code> to remove it.</li>
          <li>Ensure annotations are saved in <code className="bg-gray-200 p-1 rounded">.txt</code> format.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700">5. Exporting Annotations</h2>
        <p className="text-gray-600">Ensure all <code className="bg-gray-200 p-1 rounded">.txt</code> files are stored with their respective images for training YOLO models.</p>
      </div>
    );
}
