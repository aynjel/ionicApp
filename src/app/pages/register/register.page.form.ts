import { FormBuilder, Validators, FormGroup, AbstractControl } from "@angular/forms";

export class RegisterPageForm{

    private formBuilder: FormBuilder;
    private registerForm: FormGroup;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
        this.registerForm = this.createForm();
    }

    createForm(){
        let form = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
        });

        form.setValidators(passwordMatchValidator);

        return form;
    }

    getForm(){
        return this.registerForm;
    }
}

function passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    
    if (password !== confirmPassword) {
        control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
        return { 'passwordMismatch': true };
    }

    return null;
  }