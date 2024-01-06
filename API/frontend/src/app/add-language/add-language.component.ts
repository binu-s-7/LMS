
@Component({
  selector:'app-add-language',
  templateUrl:'./add-language.component.html',
  styleUrls:['./add-language.component.scss'],
})
  export class AddLanguageComponent{
  form = new FormGroup({
    language:new FormControl(",[Validators.required]),
});

constructor(
private snackBar:MatSnackBar,
public dialogRef:MatDialogRef<AddLanguageComponent>,
private itemsService:ItemsServiceService
  ){}
