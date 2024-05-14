


/* 스타일 */
.list-group {
  //출결 달력
  &.calendar {
    justify-items: end;
    margin-top: -107px;
    container: category_item / inline-size;
    a {
      grid-column: 2 / 2;
    }
    .btn {
      display: block;
      width: 160px; height: 160px;
      aspect-ratio: 1/1;
      padding: 0 20px 0 20px;
      box-sizing: border-box;
      border-radius: 20px;
      background-color: $gray_24;
      text-align:left;
        p {
          margin-bottom: 15px;
          color: $white;
          font-size: 14px;
        }
        strong {
          display: block;
          font-size:32px;
          font-family: $font_kr;
          font-weight: 700;
          color: $white;
          em {
            font-weight: 700;
          }
        }
    }
    &:before {
      content: '';
      position: absolute; 
      z-index: 1;
      top: -14px; right: 0;
      width: 160px; height: 42px; 
      background: {
        image: url($url + "icon/calendar_head.svg");
        repeat: no-repeat;
        size: cover;
        position: top center;
      }
    }
  }
  //카테고리 
  &.category {
    gap: 16px 0;
    justify-content: space-between;
    margin-top: 16px;
    container: category_item / inline-size;
    .item {
      position: relative;
      max-width: 160px; max-height: 160px;
      padding: 30px 20px 0 20px;
      aspect-ratio: 1/1;
      background-size: 24px 24px;
      &:nth-child(even) {
        justify-self: end;
        .btn {
          text-align: left;
        }
      }
      .btn {
        display: block;
        padding: 0;
        box-sizing: border-box;
        color: $white;
        font-size:32px;
        font-family: $font_kr;
        font-weight: 700;
        text-align: right;
      }
      &.item-word {
        background: {
          color: $grape_61;
          image: url($url + "icon/book.svg");
          repeat: no-repeat;
          position: bottom 30px left 20px;
        }
      }
      &.item-exam {
        background: {
          color: $orange;
          image: url($url + "icon/exam.svg");
          repeat: no-repeat;
          position: bottom 30px right 20px;
        }
      }
      &.item-result {
        background: {
          color: $red_f6;
          image: url($url + "icon/flag.svg");
          repeat: no-repeat;
          position: bottom 30px left 20px;
        }
      }
    }
  }
  //단어장
  &.character {
    justify-content: space-between;
    gap: 8px 16px;
    .item {

      max-width: 160px; max-height: 160px;
      aspect-ratio: 1/1;
      padding: 15px 20px; 
      box-shadow: inset -2px -4px 4px 0 rgba(0,0,0,0.05), inset 2px 4px 4px 0 rgba(0,0,0,0.05);
      &:nth-child(even) {
        justify-self: end;
      }
    }
    .btn {
      display: block;
      width: 100%; height: 100%;
      padding: 0;
      color: $black;
      font-family: $font_en;
    }
    .count-group {
      text-align: left;
      .data {
        font: {
          size: 12px;
          weight: 300;
        }
      }
      .num {
        font: {
          size: 32px;
          weight: 700;
        }
      }
    }
    .perfect {
      min-height: 18px;
      margin-bottom: 2px;
      color: $error;
      text-align: right;
      text-transform: uppercase;
      font: {
        size: 14px;
        weight: 700;
      }
    }
    .score {
      dl {
        @include grid(
        flex,
        $wrap: wrap,
        $justify_con: space-between
      );
      dt {
        color: $black;
        font-size: 12px;
      }
      dd {
        justify-self: end;
        min-width: 34px;
        padding: 2px 4px;
        box-sizing: border-box;
        border-radius: 6px;
        background-color: $orange;
        color: $white;        
        text-align: center;
        font: {
          size: 12px;
          weight: 300;
        }
      }
      }
      dl + dl {
        margin-top: 4px;
      }
    }
  }
}