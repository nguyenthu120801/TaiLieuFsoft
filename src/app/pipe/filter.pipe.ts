import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value : any[], filterString: string, BookName:string): any{
    const result: any = [];
    if(!value || filterString === '' || BookName ===''){
      return value;
    }
    value.forEach((data: any)=>{
      console.log(data[BookName]);
      if(data[BookName]?.trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(data);
      }
    });
    return result;
  }

}
