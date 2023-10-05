import { FormBuilder, Validators, FormGroup } from "@angular/forms";

export class BlogCreateForm{

    private formBuilder: FormBuilder;
    private createBlogForm: FormGroup;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
        this.createBlogForm = this.createForm();
    }

    createForm(){
        let form = this.formBuilder.group({
            id: [''],
            title: ['', Validators.required],
            content: ['', Validators.required]
        });

        return form;
    }

    getForm(){
        return this.createBlogForm;
    }
}