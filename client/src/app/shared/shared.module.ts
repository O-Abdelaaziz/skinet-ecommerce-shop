import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';



@NgModule({
    declarations: [
        PagingHeaderComponent
    ],
    exports: [
        PagingHeaderComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
