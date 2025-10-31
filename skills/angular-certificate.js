<<<<<<< HEAD
async function generateCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('landscape'); // A4 size in landscape mode

    const name = document.getElementById('name').value;
    const currentDate = new Date();
    // Adjusting date to UTC-5:30
    currentDate.setUTCHours(currentDate.getUTCHours() - 5);
    currentDate.setUTCMinutes(currentDate.getUTCMinutes() - 30);
    const dateString = currentDate.toLocaleString('en-US', {
        timeZone: 'UTC',
        hour12: true,
        timeZoneName: 'short'
    });

    // Load the certificate template image
    const img = new Image();
    img.src = 'certificate-template.jpg'; // Replace with the actual path to your template

    img.onload = function() {
        // Add the background image
        doc.addImage(img, 'JPEG', 0, 0, 297, 210); // A4 landscape dimensions in mm

        // Add certificate title
        doc.setFontSize(30);
        doc.setFont('helvetica', 'bold');
        doc.text('Certificate of Completion', 148.5, 80, null, null, 'center');

        // Add body text
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text(`This certificate of completion confirms that`, 148.5, 100, null, null, 'center');

        // Add recipient name
        doc.setFontSize(24);
        doc.setFont('helvetica', 'bold');
        doc.text(name, 148.5, 110, null, null, 'center');

        // Add body text
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text(`has successfully completed`, 148.5, 122, null, null, 'center');

        // Add course completion text
        doc.setFontSize(20);
        doc.setFont('helvetica', 'bold');
        doc.text(`Angular - Full Course for Beginners`, 148.5, 130, null, null, 'center');

        // Add date
        doc.setFontSize(12);
        doc.text(`Date: ${dateString}`, 148.5, 150, null, null, 'center');

        // Save PDF
        doc.save('Certificate_of_Completion.pdf');
    };
}

function toggleParagraph(paragraphId) {
    var content = document.getElementById('paragraph-' + paragraphId);
    if (content.classList.contains('active')) {
        content.classList.remove('active');
    } else {
        content.classList.add('active');
    }
}

=======
async function generateCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('landscape'); // A4 size in landscape mode

    const name = document.getElementById('name').value;
    const currentDate = new Date();
    // Adjusting date to UTC-5:30
    currentDate.setUTCHours(currentDate.getUTCHours() - 5);
    currentDate.setUTCMinutes(currentDate.getUTCMinutes() - 30);
    const dateString = currentDate.toLocaleString('en-US', {
        timeZone: 'UTC',
        hour12: true,
        timeZoneName: 'short'
    });

    // Load the certificate template image
    const img = new Image();
    img.src = 'certificate-template.jpg'; // Replace with the actual path to your template

    img.onload = function() {
        // Add the background image
        doc.addImage(img, 'JPEG', 0, 0, 297, 210); // A4 landscape dimensions in mm

        // Add certificate title
        doc.setFontSize(30);
        doc.setFont('helvetica', 'bold');
        doc.text('Certificate of Completion', 148.5, 80, null, null, 'center');

        // Add body text
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text(`This certificate of completion confirms that`, 148.5, 100, null, null, 'center');

        // Add recipient name
        doc.setFontSize(24);
        doc.setFont('helvetica', 'bold');
        doc.text(name, 148.5, 110, null, null, 'center');

        // Add body text
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text(`has successfully completed`, 148.5, 122, null, null, 'center');

        // Add course completion text
        doc.setFontSize(20);
        doc.setFont('helvetica', 'bold');
        doc.text(`Angular - Full Course for Beginners`, 148.5, 130, null, null, 'center');

        // Add date
        doc.setFontSize(12);
        doc.text(`Date: ${dateString}`, 148.5, 150, null, null, 'center');

        // Save PDF
        doc.save('Certificate_of_Completion.pdf');
    };
}

function toggleParagraph(paragraphId) {
    var content = document.getElementById('paragraph-' + paragraphId);
    if (content.classList.contains('active')) {
        content.classList.remove('active');
    } else {
        content.classList.add('active');
    }
}

>>>>>>> c6c1c3b1e383bca6621f08454d7295c3a6b65d5b
