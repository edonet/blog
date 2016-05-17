# 常用【Sublime Text】设置
常用【Sublime Text】设置备忘

## 快捷键设置
``` json
[
    {
        "keys": ["ctrl+alt+p"],
        "command": "prompt_select_workspace"
    }
]
```

## 配置设置
``` json
{
    "auto_complete_triggers":
    [
        {
            "characters": "< ",
            "selector": "text.html"
        },
        {
            "characters": "< ",
            "selector": "text.svg"
        },
        {
            "characters": "@: ",
            "selector": "source.css"
        }
    ],
    "auto_find_in_selection": true,
    "auto_match_enabled": true,
    "close_windows_when_empty": true,
    "color_scheme": "Packages/User/SublimeLinter/Monokai (SL).tmTheme",
    "default_line_ending": "unix",
    "ensure_newline_at_eof_on_save": true,
    "font_size": 14,
    "highlight_line": true,
    "ignored_packages": [],
    "match_brackets": true,
    "match_tags": true,
    "open_files_in_new_window": false,
    "remember_full_screen": true,
    "save_on_focus_lost": true,
    "show_encoding": true,
    "tab_size": 4,
    "translate_tabs_to_spaces": true,
    "trim_trailing_white_space_on_save": true,
    "use_simple_full_screen": false
}
```
