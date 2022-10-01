import { Pagination } from './../model/pagination';
import { Router } from '@angular/router';
import { debug } from 'src/app/utils/utils.tools';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Feed } from 'src/app/model/feed';
import { Usuario } from 'src/app/model/usuario';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-homedumb',
  templateUrl: './homedumb.component.html',
  styleUrls: ['./homedumb.component.scss']
})
export class HomedumbComponent implements OnInit, OnChanges {

  @Input() usuario: Usuario;
  @Output() postar = new EventEmitter();
  @Output() changePage = new EventEmitter();
  @Input() feeds: Feed[];
  @Input() paginacao: Pagination;

  @ViewChild('paginationElement') paginacaoHtml: ElementRef;

  post: string = "";

  URL_PICTURE: string;

  constructor(
    private router: Router,
    private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.URL_PICTURE = environment.URL_UPLOAD;
    if (!this.usuario) {
      this.usuario = this.auth.getUsuario();
      if (!this.usuario)
        this.router.navigate(['login']);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.makePagination();
  }

  async onPostar() {
    if (this.post?.length < 3)
      return;

    let feed = new Feed();
    feed.texto = this.post;
    this.post = '';
    feed.create_at = new Date();
    feed.usuario = this.auth.getUsuario();
    debug('postado > ',feed);
    this.postar.emit(feed);
  }

  openPost(id: number) {
    this.router.navigate([`feed/${id}`])
    debug('Abrir postagem: ', id);
  }

  makePagination() {
    if (this.paginacao == null) {
      return;
    }
    let ref = this.paginacaoHtml.nativeElement;
    ref.innerHTML = "";

    for (let i = 1; i <= this.paginacao.totalPages; i++) {
        let li = document.createElement('li');
        li.classList.add('page-item')

        if (this.paginacao.currentPage == i) {
        li.classList.add('active')

        let span = document.createElement('span');
        span.classList.add('page-link');

        span.appendChild(document.createTextNode(i.toString()));
        li.appendChild(span);
        ref.appendChild(li);
      } else {
        let a = document.createElement('a');
        a.classList.add('page-link');
        a.appendChild(document.createTextNode(i.toString()));

        li.appendChild(a);
        li.addEventListener('click', () => this.setPage(i));

        ref.appendChild(li);
      }

        // r += `<li class="page-item active" aria-current="page">
        //         <span class="page-link">${i}</span>
        //       </li>`;
      // else
        // r += `<li class="page-item" (click)="setPage(${i})"><a class="page-link">${i}</a></li>`;
    }
  }

  setPage(page: number) {
    this.changePage.emit({page});
  }

}
