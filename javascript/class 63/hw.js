/*global $*/

(function () {
    'use strict';

    $('body').append(`
        <button id="addContact">Add Contact</button>
        <table id="contactsTable">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead >
            <tbody>
                <tr>
                    <td colspan="4">No contacts loaded</td>
                </tr>
            </tbody>
        </table>
        <form id="contactForm">
            <div class="formGroup"><label for="first">first</label><input id="first" name="first" required /></div>
            <div class="formGroup"><label for="last">last</label><input id="last" name="last" required /></div>
            <div class="formGroup"><label for="email">email</label><input type="email" id="email" name="email" /></div>
            <div class="formGroup"><label for="phone">phone</label><input type="tel" id="phone" name="phone" /></div>
            <input type="checkbox" id="terms">I agree to <a href="">terms and conditions</a><br>
            <div class="buttons"><button>add</button><button id="cancel" type="button">cancel</button></div>
        </form>`);

    const theTable = $('#contactsTable tbody');

    const contacts = [];

    function addContact(newContact) {
        if (!contacts.length) {
            theTable.empty();
        }

        contacts.push(newContact);

        theTable.append(`<tr>
                            <td>${newContact.firstName}</td>
                            <td>${newContact.lastName}</td>
                            <td>${newContact.email}</td>
                            <td>${newContact.phone}</td>
                         </tr>`);
    }

    const firstNameInput = $('#first');
    const lastNameInput = $('#last');
    const emailInput = $('#email');
    const phoneInput = $('#phone');
    const contactForm = $('#contactForm');

    contactForm.submit(event => {
        const checkbox = $('#terms');
        if (checkbox.is(":checked")) {
            const newContact = {
                firstName: firstNameInput.val(),
                lastName: lastNameInput.val(),
                email: emailInput.val(),
                phone: phoneInput.val()
            };

            addContact(newContact);
            hideContactForm();
        } else {
            alert("please agree to terms and conditions");
        }
        event.preventDefault();

    });

    function hideContactForm() {
        //contactForm.hide();
        contactForm.slideUp('fast'); // 5000);
        contactForm[0].reset();
    }

    $('#cancel').click(() => {
        hideContactForm();
    });

    $('#addContact').click(() => {
        //contactForm.show();
        contactForm.slideDown('slow');
    });
}());