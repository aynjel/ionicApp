import { FormBuilder, Validators, FormGroup } from "@angular/forms";

export class ProfileEditForm{

    private formBuilder: FormBuilder;
    private createdProfileForm: FormGroup;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
        this.createdProfileForm = this.createForm();
    }

    createForm(){
        let form = this.formBuilder.group({
            id: [''],
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            img: [''],
            education: [''],
            dob: [''],
            gender: [''],
            company: [''],
        });

        return form;
    }

    getForm(){
        return this.createdProfileForm;
    }
}