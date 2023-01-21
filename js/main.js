const artworks = [
    {
        "title": "De Nachtwacht",
        "url": "https://lh3.googleusercontent.com/SsEIJWka3_cYRXXSE8VD3XNOgtOxoZhqW1uB6UFj78eg8gq3G4jAqL4Z_5KwA12aD7Leqp27F653aBkYkRBkEQyeKxfaZPyDx0O8CzWg=s0"
    },
    {
        "title": "Isaak en Rebekka, bekend als ‘Het Joodse bruidje’",
        "url": "https://lh3.googleusercontent.com/mAyAjvYjIeAIlByhJx1Huctgeb58y7519XYP38oL1FXarhVlcXW7kxuwayOCFdnwtOp6B6F0HJmmws-Ceo5b_pNSSQs=s0"
    },
    {
        "title": "Portret van een vrouw, mogelijk Maria Trip",
        "url": "https://lh3.googleusercontent.com/AyiKhdEWJ7XmtPXQbRg_kWqKn6mCV07bsuUB01hJHjVVP-ZQFmzjTWt7JIWiQFZbb9l5tKFhVOspmco4lMwqwWImfgg=s0"
    },
    {
        "title": "Zelfportret als de apostel Paulus",
        "url": "https://lh3.googleusercontent.com/NrCcfeY0r2F3M2hIQe5SLDRofR2tVzeOH18VjflOYGj88v4clb4v2H_VgCZR4nJhYsxxH9ATzfkL2tRqOWEK5-gPVEE=s0"
    },
    {
        "title": "De waardijns van het Amsterdamse lakenbereidersgilde, bekend als ‘De Staalmeesters’",
        "url": "https://lh3.googleusercontent.com/gShVRyvLLbwVB8jeIPghCXgr96wxTHaM4zqfmxIWRsUpMhMn38PwuUU13o1mXQzLMt5HFqX761u8Tgo4L_JG1XLATvw=s0"
    },
    {
        "title": "Zelfportret",
        "url": "https://lh3.googleusercontent.com/7qzT0pbclLB7y3fdS1GxzMnV7m3gD3gWnhlquhFaJSn6gNOvMmTUAX3wVlTzhMXIs8kM9IH8AsjHNVTs8em3XQI6uMY=s0"
    },
    {
        "title": "Oopjen Coppit",
        "url": "https://lh3.googleusercontent.com/ib8SNTK2Qk-z64UYuu-_mI3FswMpYmmNU871wu5diDEPyjxmYJcNI4qRtqxlvKkVnrXTAxAFkuHX7DAN9ZwPFzS5fGE=s0"
    },
    {
        "title": "Marten Soolmans",
        "url": "https://lh3.googleusercontent.com/hDN8_JS4BbbksBXkxIDUldJvooejHBfQjgD3b_Jr73HjVOAs8thpnvCJA3WUtQFxlbjx-QB1-IyqhgEiM4dFLFk1Sg=s0"
    },
    {
        "title": "Salome ontvangt het hoofd van Johannes de Doper",
        "url": "https://lh3.googleusercontent.com/sB8bcd5NQmryNNIZ3-xb27VMtsohrhjMxm3HZMX-ajffrWUyKh7WoBzOik5k3rc-8XNzmDrpNfyErwrsbN2bs2o63EQ=s0"
    },
    {
        "title": "Zelfportret met warrig haar",
        "url": "https://lh5.ggpht.com/_NRW9pWbnhE9EsPE9WmZy5Ua2qpn4fgl4rWiV2hVBljp9xpx9_UQgQ3QosNGid3i-MwEvGiJHSLmWeXNIP7IhAZorFw=s0"
    },
    {
        "title": "Drie vrouwen en een kind bij een huisdeur",
        "url": "https://lh6.ggpht.com/mtdkekOdtK1kX5ES_uCsylj-G54fdWvu6zfVgZ8uraQ7hA9cSWGj1F1Fu-DsvnM0to0jixoXVF7nxTJwQaILNgxI0A=s0"
    },
    {
        "title": "Christus aan het volk getoond: liggende plaat",
        "url": "https://lh5.ggpht.com/jrYBpTWXMcOU1swnC4KvgWGDdd-oyI6pmenHVagQijHiYburOxarx7Bu8MP06d7ceUzn4Mc6cD0EUeXgoGc8NwzJNMY=s0"
    },
    {
        "title": "Zelfportret met gefronst voorhoofd",
        "url": "https://lh5.ggpht.com/4FfiozoI1fCQA8p_XUk20ecx2VJmIC6zajcuK7_REoGoOw7CLimlHQrqjLPIwQX5JhHp6_2qcec4mtlmsoKLklklUCk=s0"
    },
    {
        "title": "Zelfportret, etsend bij een raam",
        "url": "https://lh6.ggpht.com/KAAcuqS2dD591eqdwEht4kApU5_y6ZIt_FbGdn1-L4j8trxYV3g4OmyThYXKtg1qlv4moTu2EFq5tuQp34dsnAkWWjfc=s0"
    },
    {
        "title": "Hiëronymus lezend in een Italiaans landschap",
        "url": "https://lh3.googleusercontent.com/Ozh76ERvySQDJzguuAu5Y3Ucmj4OJkYX3kXiEhzTxh1pr3zwA4FnqINi6vnyFTH5Aj_ZAmXkX6vDk0pQ_IyEZclX9RYW=s0"
    },
    {
        "title": "Stilleven met pauwen",
        "url": "https://lh3.googleusercontent.com/I9oSzKfxHOxXB2GHbHE5byjd5FABgY7XEbAh0U5AJgsVJdCwsVJrtazWekJ7NSW5jPM96gflYIDeAu2wv3-8oXBhsT8=s0"
    },
    {
        "title": "Landschap met stenen brug",
        "url": "https://lh3.googleusercontent.com/_s3YWiBaZ5MLItdnoqsnPCn3vbvfRCWORbObvp0lj5HBbjP_5dtOAYzWyh30fcwAYFC_1J7XF4rXnHNSxZFtFSpM-EY=s0"
    },
    {
        "title": "Rembrandts zoon Titus in monniksdracht",
        "url": "https://lh3.googleusercontent.com/N9vZO35XvXWcJJLuOP7oFnH2a5SdkQSTqaSY_aXgO_ZRLpDJZW-uJLcMESuRahxxTmsh7mEpeOp5RgXvOr4jzkkRcFY=s0"
    },
    {
        "title": "Portret van Haesje Jacobsdr van Cleyburg",
        "url": "https://lh3.googleusercontent.com/8IJF23RpZ5Jjukz6GHkAvagBGK4X5ZRJygm6DMvR7a0eQQWc_NoPzDZmf2UugJ-2NUxgFcJ2tx0c26K8EZvzkQBlra3o=s0"
    },
    {
        "title": "Jonge vrouw in gefantaseerde kleding",
        "url": "https://lh3.googleusercontent.com/pjt-8Cmw9L5QH9UsbkiJNfgXR3Db0R3r-joq82UKmCZ-I-3stRQmkYQJJ9dlkBJXExeen_nxxY3KSMa8_yKof5wGliA=s0"
    },
    {
        "title": "Portret van Ephraïm Bueno",
        "url": "https://lh3.googleusercontent.com/pHegPebeJZxQEILBEoIUttnlMRncr4AJtiW3Mi1qSv3PoJFEYm_rE8pddodyBFktM3owUUg70G3z_WwfUxA7rke_xg=s0"
    },
    {
        "title": "Oude lezende vrouw, waarschijnlijk de profetes Hanna",
        "url": "https://lh3.googleusercontent.com/-puHtaElxzr8J1YUryL2v2u-1fymmv7vX1uA16MhHr25KzPzoR-vK-ltx_H_afeqGJ3NCVqAvcbtpGE85oKI9Em2BAg=s0"
    },
    {
        "title": "Johannes Wtenbogaert",
        "url": "https://lh3.googleusercontent.com/8MroXq6wYMRZWSmE1CR2lzXZ8gPc7kmit7p5OV2Z2Spym2S5OK0DxbSL7i6N1zW1F0U1U57kYqKw1fdKME-rqFvwBQ=s0"
    },
    {
        "title": "De acteur Willem Bartholsz Ruyter als boer",
        "url": "https://lh3.ggpht.com/DBWgkwNug-ZZrZWrF64pXhKZwQWhD2mHC26G-I0KAWtmgw9moNAG7TY3xqOi_DzSCLoI3ptrPPqqXFRqzij-PHshDx8=s0"
    },
    {
        "title": "Zittende naakte vrouw",
        "url": "https://lh5.ggpht.com/9HyTaCKi6xb6U9XAqRXpzK_pLSQA8PyOo47_mwRU-Qk-hjV5_TEd-COEWYkxzSWIb1G0KKU9FX7X4UbvtfLkmO7VfA=s0"
    },
    {
        "title": "Het bruggetje van Six",
        "url": "https://lh3.ggpht.com/de_Gb_IYkzwHBM6kMk37tVQmEyhpI6R6TdVn7r7cm7iE8DxOdOhtkluLSIz1-IOxHRflEe4_gJAkFvsw6Zz26SWJCHnh=s0"
    },
    {
        "title": "Zelfportret met baret, wijd open ogen en open mond",
        "url": "https://lh3.ggpht.com/vHlmmuyGpLHNP2s9Lc2_a07pvSOAu_WuJuJ47rvjoP8rn00YPA-HadIYofTUfH9G3zmolKPXErdh4iqj5w2NJ1oIdm8=s0"
    },
    {
        "title": "De schelp (Conus marmoreus)",
        "url": "https://lh4.ggpht.com/aJOT03s3p0QNO0xJvCWWpGrF6W2qR9Pny_wMhyaDcauba74onvSQtZbcUkQExlh8M77whe7lQZ__ThcRRdubt-X96w=s0"
    },
    {
        "title": "Portret van Arnold Tholinx",
        "url": "https://lh5.ggpht.com/3CoPvNkLneDcLch6reQl0tONmmap1yCu-hVrDHqUZ-licNrzss0qIixxzzhnzryK7z1MNaWFen6RY5ybuUSJ2ywF4Nc=s0"
    },
    {
        "title": "Een blinde draailierspeler met zijn familie",
        "url": "https://lh5.ggpht.com/xEPG28hztYT9mMUQiICNPiC2url8opt4o84MBbzyLdG2R2meBmVOxzcYmAnyJLt2ikXdD_6xfizHyvtBxPHGQRUAAwY=s0"
    },
    {
        "title": "Een geleerde in zijn werkkamer",
        "url": "https://lh3.googleusercontent.com/JPx_OKnyuqYFTJBrUFUs8zX1j-gUeLgBp5kvxuCPn5mDUDoThO7tDma0s-BMmPo-FUO-JX0QqcOsrr3w-mD_e3mcMOo=s0"
    },
    {
        "title": "De drie kruisen",
        "url": "https://lh3.ggpht.com/qU-Y0sOrWdwD4t8qH-djXrElesLGF80DQcnZq-oFyKg-1ORsBmbGVoNQo91U8tP-PMlafjcI1Bc1Y9UFJ7E6LmXU=s0"
    },
    {
        "title": "De predikende Christus (De Honderdguldenprent)",
        "url": "https://lh5.ggpht.com/x2AStcKfxaZtdeOtRTF-9cG4dIvhGUWnL6r5V8ztrVX3oGtUsMSM071J6lbqG0gDrGJBJ1WP48mZp2wHRXEL_gtwKd3c=s0"
    },
    {
        "title": "Musicerend gezelschap",
        "url": "https://lh3.googleusercontent.com/PVn4qjK-mOcy5iU0rMpwfb_NUxr0WQiy7Ab25pLU7bb4ME4F0wyIfS0LLb8brRG2-qRbhFwuwODktU-QL3cUyEmuK9P1=s0"
    },
    {
        "title": "Tobit en Anna met het bokje",
        "url": "https://lh3.googleusercontent.com/BMnjenYuuSThrcbfY6PUpMu9c3ZPSutlBfw3dIBt66Y6HcRvWD-LsMNIeGpcH4pVhaDlEEwmtOwYMc_Re41dCNkIXTA=s0"
    },
    {
        "title": "Man in oosterse kleding",
        "url": "https://lh3.googleusercontent.com/4grKP_pusgY7bz3JEGhb3CXoCa9cBnwOcSphxkqr1P41pbyudgW_A3M7r72GZFdSoL5nIKJiifyOMHLV8SBtSvAFYA=s0"
    },
    {
        "title": "Jeremia treurend over de verwoesting van Jeruzalem",
        "url": "https://lh3.googleusercontent.com/lLBt3A_KvwwyN7PKHJ5E8sh83JutkmQRxY928TtSVSsJ4xJ3K5RNd0bRmyTTYmIqTx3Tqtew1QvGsY_SN9PoYlQKv2E=s0"
    },
    {
        "title": "Simson en Delila",
        "url": "https://lh3.googleusercontent.com/eRiEjKiw3vlkyqAhBHibW69hHQcRnRx6LMFrIHcseNr_IIoqShM4gZKXVE8BoilYkE0Ic7_Qnf_X8SRfYPabQTdSYw=s0"
    },
    {
        "title": "Zittende staalmeester: Jacob van Loon",
        "url": "https://lh3.ggpht.com/r5-lDhxGaP5MryiZtiTVB2O5Z941ni70f8maFyy1sAncEgg0KIJeDx7wl39tJZ8oLHeTOTyamMWteisJyEzab8ZSKAwJ=s0"
    },
    {
        "title": "De Amstel gezien vanaf de Blauwbrug",
        "url": "https://lh6.ggpht.com/YnxqQaXK1p4oCbECiYqtXWc6KT6H3InX-Wbo1Mt0de68ybzXTwEhVuGW4ENLAGqyiLfZuKHXZpjTYacyxAI8tPpSWg=s0"
    },
    {
        "title": "Oude man met bontmuts",
        "url": "https://lh5.ggpht.com/HA8QZWvoInK3DhFLxFpIcYAnnFDuTqgosCW8TF9YJt-C5ZW53YnbK9x8xfPEhEAjKiVVlGQUVeVaob0MOjsl9fzERg=s0"
    },
    {
        "title": "De engel verschijnt aan Elia in de woestijn",
        "url": "https://lh6.ggpht.com/cWFM4CB7NbPvEmxRUgsFUoWSYG1crMCf0ZUapOTc0x1qNc5mFykoQAmjvQ88OA5H5L23U45x4uK7gfoPm9ufrGimwJw=s0"
    },
    {
        "title": "Vrolijk paar",
        "url": "https://lh6.ggpht.com/UjYcifBoy578NVyzo9GZeOwLHy7Mb1du-Hu1Ez5WxiI7kglGZhcba26haIKqkh7346scbR59fCo-KrhqXqOyUAUFQW4=s0"
    },
    {
        "title": "Staande man met uitgestrekte arm",
        "url": "https://lh3.ggpht.com/fbQYc-XMr341PtkHzdPUnmqXMAgq5jGaugLocIUSjVk5pElNMgPQpEoznXZe0VXACj5st7iRgrLtqzNagticjolyWYs=s0"
    },
    {
        "title": "Lopende man met hoge muts",
        "url": "https://lh4.ggpht.com/QPCfxOkL5RuO2RbqSTqiSttI9lWtBxDlnCBSfC0z9VmDnMfa6gB9uZY8BX6qg4IZXjcy1irn9q3N0PO5hufMQvB9rXQZ=s0"
    },
    {
        "title": "Christus wekt de dochter van Jaïrus op",
        "url": "https://lh6.ggpht.com/mO0TviQMJrcLF0KBLNmBm60nihlP0PSfrEgPruMcERXFhFbjLWWK1j7Xi0kHDQVv5dcQnCGCE4Gf2CfyNcFNh9mb9AM=s0"
    },
    {
        "title": "De verkondiging aan de herders",
        "url": "https://lh4.ggpht.com/Ev9b7AWu_gyivQtgJrJoRkuocD0w2IaTEdSxCx_AjQBepfzqr7gvI9Qsulqqz1gDt38w5XKvLdobVu7bRKksP3Yhlkc=s0"
    },
    {
        "title": "Slapend jongetje",
        "url": "https://lh3.googleusercontent.com/A1TFoWHrb3qVgDhlwdQtkamMGs17id28_MXs8KTU233HqTxOFmQeN-PpkX0xvmWQMBafEdwH4_90kCsG57__56M0Bik=s0"
    },
    {
        "title": "Tobias en de engel nemen afscheid van Raguel",
        "url": "https://lh4.ggpht.com/dnSNspxNQBVU2yQSnqyDKlHUucnubx-uoiG3WA3Mg9GGLJm9pd7D_Sjn9yhVvEguK9c2EkAik-PvpPl4yHDJcczkIRY=s0"
    },
    {
        "title": "Studie van een op de rug geziene man",
        "url": "https://lh5.ggpht.com/cyqv96R6Q1qO1j6ojxAU8fz2Y_ecm3RBOHpvypHIduwGK7eNquoTpsPEVhn4XF89MDs2vgZTPqakI9lFuBPg75dQhkg=s0"
    },
    {
        "title": "Een man helpt een ruiter te paard",
        "url": "https://lh6.ggpht.com/D7z2L75hql0F3TQcEz1jC_6Q5UZFWk80Yi4et32HGIiLE65MkT6B158meq-4NE5Jtdc3Mvgb1kJ8V7AOj5fUtRVE9-w=s0"
    },
    {
        "title": "De maaltijd te Emmaüs",
        "url": "https://lh5.ggpht.com/7PctH3wIm8I1W0wbZT3qdNXex5HPysDvJseYW2lmAEI5MBQCI041_9vbnZnqRxFNdE7UJyF7oVtnSUWk_tnRykVYwdQ=s0"
    },
    {
        "title": "Haman voor Ahasverus",
        "url": "https://lh6.ggpht.com/6scSxd23lYZMoilcvyAAiASqGGojb-kiOaUYTQf46rfRAC7AN4r9a6_SXONIoyiP-Iby9BSSbXnwjllKaHKTaKK3KIm7=s0"
    },
    {
        "title": "Daniël in de leeuwenkuil",
        "url": "https://lh3.ggpht.com/f7NPdXQytFZoEoeK2VbIQS03aes9_G5Y3oFTNSD3CmhE7_HC_ULy1eaTnk8X5EBpWfWzeA-khKj35-ixH_Hks4bz-uQJ=s0"
    },
    {
        "title": "De acteur Willem Bartholsz Ruyter als koning Ahasverus op zijn troon",
        "url": "https://lh6.ggpht.com/TF95jVgnR91HANuUFrLEVGAPANlh_mg_gaWPJA2EPlGCBKYD_B7AIgwie4tgT1Tyaa5PtxI2qXDLDXMwlgJO-o6iIhs=s0"
    },
    {
        "title": "Jacob zegent Efraïm en Manasse, de zonen van Jozef",
        "url": "https://lh3.ggpht.com/Bq2PKFKkblKO2FEZ9KeAyzXbAU-8fxir_sSP4Lmyyhz2UiIJ7heudlH3zSFt6UJRZ_2c6O02Y6FTSayBUhoxB75ojyo=s0"
    },
    {
        "title": "Een jongen knipt zijn hond",
        "url": "https://lh3.ggpht.com/jZPXV7iqsqVGiRS0o6SvscVOxMvVPKGSBTNSVv4i6isQiWOHmIWf6yBahOIAz-KmkQip2qNRbZPGkdScRVcywqZNdT7P=s0"
    },
    {
        "title": "Staande man met een kind aan de hand",
        "url": "https://lh3.ggpht.com/mPwgIOmHu2862VSsCt4lKEZ4mjrNAQcs-7jJzXnYjq_fyVD-72ajdZOvpZ7Qmwfudu6T7jS-qKm9h_YGCofxz9kOJHVI=s0"
    },
    {
        "title": "Een koe in de stal",
        "url": "https://lh4.ggpht.com/5C9Mv5BUiyLhT8xgYbh6ss1RxP-om-ZtRzRYt5TdLbaW78vIdadCiXScfCZ6easCYv7DlU8GuLoVavyEzuuWNqnbXTc=s0"
    },
    {
        "title": "Geknielde man met een tulband",
        "url": "https://lh3.ggpht.com/AT_yVLazVxNlDSjFAxmtVBX_3_Up37f3H9CWlJFgiiAcOOeHPP8FSgM7ogDcoenzZbWSIxzwPfgo_uUVJJpBK9JZCzE=s0"
    },
    {
        "title": "Langhuisboerderij met hooiberg in een polderlandschap",
        "url": "https://lh5.ggpht.com/rvV4f65bbsjPGrBx7ar8OruuOLI16YPRWecR5HXlvqugqVm1EFvaGQKmKcgYVVL0zDpCS4BcDsBgI6j5VfnJ4yST__g=s0"
    },
    {
        "title": "De verkondiging aan de herders",
        "url": "https://lh4.ggpht.com/b41bQgRreH19mSxTO1LejtmD54Zq9CsFYlbqYyV8pFtA28hVr98bSk-jmEcD2Ene3mOcRNz5jxwANGMQiLhoMqufgHc-=s0"
    },
    {
        "title": "Muts",
        "url": "https://lh6.ggpht.com/Cxf0aPo3qNn1du9oGhtvp7oqd11kcuzxthPhUexjsw14rMT3XSbxh1CBELZmNrl65HZtOE741qqZDpmzNgpcjR5s7lFT=s0"
    },
    {
        "title": "Shah Jahan en zijn zoon",
        "url": "https://lh5.ggpht.com/f88iIpzSeP7dInduOSX5g1376E7m5TFMa3RhOSCclSUAQM-ZFV4TROdW3DLr364TcVYI-il1H4bR2BOvNfUjd8P6FA=s0"
    },
    {
        "title": "Zittende oude man met hoge muts",
        "url": "https://lh3.ggpht.com/sRhdwDUG47-zK--WUOYCkoAfaDqPvDEsu2ax7fqvgzP-nkCwftUrGk-k_DqMVnt92djHcDI8adHgFBaZ1_hfUNvcmA=s0"
    },
    {
        "title": "God verschijnt aan Abraham",
        "url": "https://lh4.ggpht.com/a6_dyL1N4c8a3Yos_4_yFo7zv-MPX65Y8Y6Vu8tnF5APR6PiGBV9QuoTBXEUVPLU4v3Gsdy554CCZRz34lQbXEaq3X8=s0"
    },
    {
        "title": "Slaapkamer met Saskia zittend in een hemelbed",
        "url": "https://lh3.googleusercontent.com/Vb_JisKb8T3Df2-Zzgf31PeN2fH8tJvhkzkd8xt2V2ni5FtvveN-eHTsILIZQBFTgbMnrOLxFyxPDWBOPWAiL6csAzmEYmdKfTmfpBQ=s0"
    },
    {
        "title": "De engel verschijnt aan Manoah en zijn vrouw",
        "url": "https://lh3.ggpht.com/ZiD3DyFVEzo2mCCdiJnhfuGC4UPqkZjRpQcNB2yDLsN7gSVWDbz2SKpjM8ADT8GF4jKnvvAgAgwHJnjJiwQ0y2KGK4w=s0"
    },
    {
        "title": "Jongen met hond, twee pratende mannen en een hoofd van opzij",
        "url": "https://lh6.ggpht.com/JRdWZ15--hFZDFIhxuPq1vGgCsJoeENYMF37Ec5jhpsqNERHSk-2WlTbxl9sTUIs6n7jzvAo2e6W_MtIZ9aO5G1QFr8=s0"
    },
    {
        "title": "Huisje met houten omheining tussen bomen",
        "url": "https://lh6.ggpht.com/Bl-wtyzPNLA21R91vmnOAjgvjd3Bv-2z6Aa0JJLq5emlwzc1WATR2ke2sR6fuuXSaJx77VdZ7bOGpDcQFq2zVdKYDnZB=s0"
    },
    {
        "title": "Liggende leeuw",
        "url": "https://lh6.ggpht.com/KwWgXtqSXutoFIPjTEbtC8tR92NWftJ5FPqDx2OeXiXBbVeyCVl-anVmvUAyVwD-PnNb1Xi8oHZI3UhgJ1X6Fv-euOaa=s0"
    },
    {
        "title": "De koekenbakster",
        "url": "https://lh5.ggpht.com/q08WCq-mWUSyFmlDoxJY97XyPq3wRe6FwxQZc_f8iJd8O6T8DHnU5FSaKsMPS0gq5vOLG7aCYAMciI9lGEpPbGMUU1o=s0"
    },
    {
        "title": "Twee paarden bij een halteplaats",
        "url": "https://lh6.ggpht.com/cJFx5xNr5tRKuutnpD6oKWGniZ_Vi97m_6ZhJympgqu7ziseJ94kdaEm_Bv89fetaQCX5ob2z7hDug_A-SKq_aMQc68=s0"
    },
    {
        "title": "De engel in het huis van Tobia",
        "url": "https://lh5.ggpht.com/ySVz0Q1071L-L76c2hPnl34ueZxzjUdO3QsxcBTRF0xfrNtiVjBqZTXXzF9zjiDUJRXEtWZY539XeCLYyAPstZLqPtw=s0"
    },
    {
        "title": "Vrouw geeft een kind te drinken",
        "url": "https://lh3.ggpht.com/Ezu09J5lrgf-qC2hsQYOKxABPBHZT6s9GVKG1I2YRuo5ii9SQZoAzIV6Ji3UjIT88Eafgp--ADDxtrtaHRnJ-k9Ofs1r=s0"
    },
    {
        "title": "Susanna en de ouderlingen",
        "url": "https://lh4.ggpht.com/rX8p0RRw5IO1BxknvBKPMdmKezwJb6BTEcgR96bxJ-BDwO6zYM14TOUIJJCQ1hTji_v4ielhf_nxbNrkV6h9GD4iraw=s0"
    },
    {
        "title": "Liggende leeuw naar rechts",
        "url": "https://lh6.ggpht.com/R74Q-DkUIOJYPeK3unth6PcWMhKJLZFQW7zmW-vQocfyFdaxgftM1LLXJe7AvCks5MzmTT0_Wf3vefmnli4j47qrmjA=s0"
    },
    {
        "title": "Indiase boogschutter",
        "url": "https://lh5.ggpht.com/Eqpv5R9JG9CvQaDTkcvitl0e110i7iW1gN82J6_b6ObxaeQu7pWQuuR-TX9_BsnI4uKzCrYN2p03-oXTpq6ZNN2K510=s0"
    },
    {
        "title": "Juda en Tamar",
        "url": "https://lh6.ggpht.com/stq8m-5otXh90GcJmykQWekEe2a8vQV31HJzP1J-77uxXmEg52ZCSP6NmHbRq8jGtTWiTUsmA17d8BQIIKvujhQKYA0=s0"
    },
    {
        "title": "Esther bezwijmt voor Ahasverus",
        "url": "https://lh3.ggpht.com/FpxgildlLmBTj763Fk5aHaEQYocv2fHg81_SsI1vIRQWH48bdDR9BjSUhufOV3LjvpyuW0MfWkas66iMjDDImoD6Lg=s0"
    },
    {
        "title": "Gezicht op de Amstelveenseweg buiten Amsterdam",
        "url": "https://lh3.ggpht.com/UThfVSbjL2e23vcUgBAdF-aU7dc3mimBzd6iJdCf5Cqlnc3dIE_lQGpTx12JlFA7fWRBZ07rAXOUf5PXXx3B8M-gGF4=s0"
    },
    {
        "title": "Grootmogol Jahangir",
        "url": "https://lh5.ggpht.com/24zn17rmZEUntmj7QRw9yCB9MYnpkF3Nh_2J3Z7wKvuDUjiiXC3pYELR8T-sIbPREBa0OJTEG3dk0fbRkM9HIBMlFbw=s0"
    },
    {
        "title": "Schrijvende oude man met een baard",
        "url": "https://lh3.googleusercontent.com/FgcFG9ShEhdgAaRMvkYgTRMXYXHd4cYRzFjXu86Y5Pp_bPKV2xemLuMH1IJjYKdqvhhVzAUmX9KTLozGOYilpRTmcw=s0"
    },
    {
        "title": "Herberg aan de Amstelveenseweg",
        "url": "https://lh6.ggpht.com/YmJxhcVKQgTfzXYKe24IP1WIoJHawSAYt_FrRLQwo6DuLQT2o2A-mCij4Q5llm73Xuz5pazMSLWDPDRDINbKVbjK30Pi=s0"
    },
    {
        "title": "Een jongen steekt zijn pijp aan",
        "url": "https://lh5.ggpht.com/FJKvq23bxerNbyYESsIZmAQiArq5U76t6Vl2VU4N1BX3cO5JFTGKBYjNOlFLfdXvSaqHmoBbyriMN8Hnn8ypB3VYmHU=s0"
    },
    {
        "title": "Toneelspeler in de rol van Pantalone",
        "url": "https://lh4.ggpht.com/Th5-ONJadlCjeeNVcn19icd1RREEYVYQ4JaecEsHMbyZC4-FMqcguNCB-56jFUc9cX10ArHcHaTpwJ1bWXIurBvyweal=s0"
    },
    {
        "title": "Lopende jongen met een stok",
        "url": "https://lh6.ggpht.com/Cevd-GLglMSYqSJcRj07bhG5ymmTfVXOpRYC8Wd7e6iMoLiQ0v_8aQUxa44TwbqyxLYwbHBIoUyB81c3zQZ67HIrgUs=s0"
    },
    {
        "title": "De engel verschijnt aan Jozef in zijn droom",
        "url": "https://lh5.ggpht.com/QBOH6EQBKexkIRCH-IzbVLGxMNLcThWh4JpwAekuBBx3PhlQi2WHNFGkrsP7Wc3FncKsOV5dwGCtVQ2okN_DUqeNbg=s0"
    },
    {
        "title": "Jozef in de gevangenis verklaart de dromen van de schenker en de bakker",
        "url": "https://lh6.ggpht.com/omO7uqE3XZzeTKyB0q_TlXcCp3p0q0qnyarSNkZ8_1u7KFyXOWQ6ElxNZIfQO2O9rML5A6PMKV9RzBOK_-VlCgttGuU=s0"
    },
    {
        "title": "Staande vrouw met kind op haar arm",
        "url": "https://lh3.ggpht.com/2_R7zkYRfSfqE7UnKfg-9NJuLXAfd0DbXWPDaXKThNa33PT6Rz0fI5CTATh4i-Ny0xh7dpPUmqFkgXyiy1kkdjBETA=s0"
    },
    {
        "title": "Kleine studie van de kop van een zieke vrouw",
        "url": "https://lh6.ggpht.com/1qP9E4YQuUKu54E5ZGUdNNTXAQON_9vKmn3I7uItM4z_OeBm5R4DdbvIJJXPR3xlvdmWOfrqAxROUgQD-gwEkwos=s0"
    },
    {
        "title": "Jozefs bebloede rok wordt aan Jacob getoond",
        "url": "https://lh4.ggpht.com/gs7PKAuLdFpC8qTUkW9ysEWVU1U3Q48uI3LbhMUhBeRVyw46iBwp2UmHDaOyLrhnHT9nhmop52aaeMrIgcNCOOcW-g=s0"
    },
    {
        "title": "Minerva in haar studeerkamer",
        "url": "https://lh5.ggpht.com/oZ8okB6otw74LxW7eJoungHSS9c2eB0Apib1k_28ghRW4MHGB6Wfu7EBio3zVMXwMocMeKAReO9p-gXRPwQ9hx4yHQ=s0"
    },
    {
        "title": "Een weg tussen sloten, bomen en huizen",
        "url": "https://lh4.ggpht.com/tNb4nEeVqWYWV407XZcvHAVgKVulZhjW8mcNI6-1PsNH2LItDM-xeFGddVPVJax2TbhDhwg3bb-5jD0nn9o22YgZSJ_5=s0"
    },
    {
        "title": "Gezicht op de Utrechtse Poort in Amersfoort, vanuit de stad gezien",
        "url": "https://lh5.ggpht.com/JPZOpapei3PpRnFwfuKBtqzri-_GUMR2OToZflOlXBfKJNYwzRUDEaajMJoqiV6TxOB7KHk8ciWdXx5nTQZeyDX7BA=s0"
    },
    {
        "title": "Twee mannen bij een deur en man met kind op schoot",
        "url": "https://lh3.googleusercontent.com/sXpmu6_r7DKoh3_ANMBp8PtfVrrWNrMHU4Oexf9UUM2ke25I8ZY4D9mzTGjuY7VNqzjWAEAobdGPhK4VrQswHUrF-20K=s0"
    },
    {
        "title": "Jacob zegent Efraïm en Manasse, de zonen van Jozef",
        "url": "https://lh3.ggpht.com/K3SnxIr94-_NK_eAXxU8IhHbGxlDo5lpGV25MKNFTgpn-Wl4BG-n-HjOw29CIUSV2PzPlrPvji1CaoQCrJTowW9mC7N0=s0"
    },
    {
        "title": "Naakte vrouw liggend tegen een kussen",
        "url": "https://lh3.ggpht.com/QpVeWP-vCk9MzofPhcgrCMR-rjaRi48ode3BEjKgHo9qYvK4iWwhVWztifWiCoNjBsEtXQMU1FojkYETo2hAPLMzn6JH=s0"
    },
    {
        "title": "Vier staande mannen met hoeden",
        "url": "https://lh4.ggpht.com/0aPT--fuzrEqateje29m1YKaxmI0IochBhfsIy8GWOtCCjPfgaqcm7qy3GPZAkz5uT9fOrYjgqINHy3zUzKgMfQBig=s0"
    }
]


function buttonClicked() {
    document.getElementById('art').src = "";
    let art = artworks;
    let random = Math.floor((Math.random() * 30));
    document.getElementById('art-title').innerHTML = art[random].title;
    document.getElementById('art').src = art[random].url;
    console.log('Did something');
}

buttonClicked()