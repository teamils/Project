import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-good-return',
  templateUrl: './good-return.component.html',
  styleUrls: ['./good-return.component.css']
})
export class GoodReturnComponent implements OnInit {

  client;
  GRDate:String = (new Date().getFullYear()+"-"+new Date().getMonth()+1+"-"+new Date().getDate()).toString();
  DocDate:String = (new Date().getFullYear()+"-"+new Date().getMonth()+1+"-"+new Date().getDate()).toString();
  dataGrId = ["GSTG20000080","GSTG20000081","GSTG20000082","GSTG20000083","GSTG20000084","GSTG20000085","GSTG20000086"];
  //Product = ["0G364B0 --> V364 SC4TR"];
  Product = ["362-1 02 --> ปากกาเน้นข้อความ ไตรพลัส สีเหลือง"," 362-23    02 --> ปากกาเน้นข้อความ ไตรพลัส สีชมพู"," 362-4     02 --> ปากกาเน้นข้อความ ไตรพลัส สีส้ม"," 362-5     02 --> ปากกาเน้นข้อความ ไตรพลัส สีเขียว"," 364-1     03 --> ปากกาสะท้อนแสง สีเหลือง"," 364-23    03 --> ปากกาสะท้อนแสง สีชมพู"," 364-4     03 --> ปากกาสะท้อนแสง สีฟ้าพลอย"," 364-5     03 --> ปากกาสะท้อนแสง สีฟ้าพลอย"," 526 B30   02TH --> Eraser rasoplast 43x19x13mm"," 132 12 C1210TH --> ดินสอดำ มาร์ส 2B FSC 100%","317-3 --> ปากกาเขียนสไลด์ 0.8 มม สีน้ำเงิน(1pack=10set*10pcs)"," 317-5 --> ปากกาเขียนสไลด์ 0.8 มม สีเขียว(1pack=10set*10pcs)"," 308 05-5 --> มาร์สกราฟฟิคพิกเม้นท์ 0.5 สีเขียว"," 526 S30     TH --> ยางลบซอฟท์ขนาด 43x19x13มม."," 4271 07-9 --> Ballpen Luna RiteClic ULV 07 black"," 132 12 C1210TH --> ดินสอดำ มาร์ส 2B FSC 100%","313-2 --> ปากกาเขียนสไลด์ 0.4 มม. สีแดง(1pack=10set*10pcs)"," 318-2 --> ปากกาเขียนสไลด์ 0.6 มม.สีแดง(1pack=10set)"," 311-2 --> ปากกาเขียนสไลด์ 0.4 มม. สีแดง(1pack=10set*10pcs)"," 311-3 --> ปากกาเขียนสไลด์ 0.4 มม. สีน้ำเงิน(1pack=10set*10pcs)","317-3 --> ปากกาเขียนสไลด์ 0.8 มม สีน้ำเงิน(1pack=10set*10pcs)"," 317-5 --> ปากกาเขียนสไลด์ 0.8 มม สีเขียว(1pack=10set*10pcs)"];
  productSelect;
  grID;
  DocNo;
  Status;
  ReceivedBy;
  Remark;
  select1;
  select2;
  select3;
  G_qtySU;
  G_qtyPcs;
  D_qtySU;
  D_qtyPcs;
  idnum : number = 0;
  Invoice : any[] = [];
  showInvoice : any[] = [];
in : any;
  constructor() {

      this.Invoice = JSON.parse(localStorage.getItem('invoice'));
      console.log( this.Invoice);

      this.in = setInterval(() => {
            let grId2 = this.grID;
            this.showInvoice = [] ;
            for(let i = 0 ; i <  this.Invoice.length ; i++){
                for(let j = 0 ; j <  this.Invoice[i].length ; j++){
                    if(this.Invoice[i][j].grID == grId2){
                        this.showInvoice = this.Invoice[i];
                    }
                }
            }
       // console.log(this.showInvoice);
       // console.log(this.Invoice);
      }, 500); //interval
  }

ngOnDestroy(){
  if(this.in){
    clearInterval(this.in);
  }
}

  ngOnInit() {
      this.client = "STAEDTLER(GR)";
      this.grID = this.dataGrId[0];
      this.ReceivedBy = "AOI-RATDA LAPSATIAN";
      this.select1 = "Not Specify Invoice Number";
      this.select2 = "Partial Return";
      this.select3 = "During the inspection and Put Away";
  }
  Submit(){
    var splitted = this.productSelect.split(" --> ");

      if(this.Invoice.length == 0){
          this.Invoice.push(new Array);
          this.Invoice[0].push({
        a0:splitted[0],
        a1 : splitted[1],
        a2:'PCS',
        a3:'1',
        G_qtySU:this.G_qtySU,
        G_qtyPcs:this.G_qtyPcs,
        D_qtySU:this.D_qtySU,
        D_qtyPcs:this.D_qtyPcs,

        client:this.client,
        GRDate:this.GRDate,
        DocDate:this.DocDate,
        Product:this.Product,
        grID:this.grID,
        DocNo:this.DocNo,
        Status:this.Status,
        ReceivedBy:this.ReceivedBy,
        Remark:this.Remark,
        select1:this.select1,
        select2:this.select2,
        select3:this.select3,
        Invoice:this.Invoice,
      });
      }else{
          let checkSame  = 0;
          let index = 0 ;
          for(let i = 0 ; i < this.Invoice.length ; i++){
              for(let j = 0 ; j < this.Invoice[i].length ; j++){
                  if(this.Invoice[i][j].grID == this.grID){
                      checkSame = 1 ;
                      index = i ;
                  }
              }
          }
          if(checkSame == 1){
                this.Invoice[index].push({
                 a0:splitted[0],
               a1 : splitted[1],
                a2:'PCS',
                a3:'1',
                G_qtySU:this.G_qtySU,
                G_qtyPcs:this.G_qtyPcs,
                D_qtySU:this.D_qtySU,
                D_qtyPcs:this.D_qtyPcs,

              client:this.client,
              GRDate:this.GRDate,
              DocDate:this.DocDate,
              Product:this.Product,
              grID:this.grID,
               DocNo:this.DocNo,
               Status:this.Status,
               ReceivedBy:this.ReceivedBy,
               Remark:this.Remark,
              select1:this.select1,
               select2:this.select2,
                select3:this.select3,
                  Invoice:this.Invoice,
                 });
            }else{
                    this.Invoice.push(new Array);
                this.Invoice[ this.Invoice.length - 1].push({
                 a0:splitted[0],
               a1 : splitted[1],
                a2:'PCS',
                a3:'1',
                G_qtySU:this.G_qtySU,
                G_qtyPcs:this.G_qtyPcs,
                D_qtySU:this.D_qtySU,
                D_qtyPcs:this.D_qtyPcs,

              client:this.client,
              GRDate:this.GRDate,
              DocDate:this.DocDate,
              Product:this.Product,
              grID:this.grID,
               DocNo:this.DocNo,
               Status:this.Status,
               ReceivedBy:this.ReceivedBy,
               Remark:this.Remark,
              select1:this.select1,
               select2:this.select2,
                select3:this.select3,
                  Invoice:this.Invoice,
                 });

            }
      }


      const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

      console.log(this.Invoice);
       localStorage.setItem('invoice', JSON.stringify(this.Invoice, getCircularReplacer()));

  }

  Cancle(){
    this.G_qtySU=null;
    this.G_qtyPcs=null;
    this.D_qtySU=null;
    this.D_qtyPcs=null;
  }

  Delete(event){
     this.Invoice.splice(event,1);


            const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

      localStorage.setItem('invoice', JSON.stringify(this.Invoice, getCircularReplacer()));
  }
}
