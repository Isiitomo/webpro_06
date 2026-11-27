```mermaid
    A["一覧<br/>db3.ejs<br/>GET /soccerplayers"]
    B["詳細表示<br/>db3_detail.ejs<br/>GET /soccerplayers/:number"]

    A -->|"選手名をクリック"| B
    B -->|"一覧に戻る"| A
```