<#
 # This script convert *.doc or *.docx files to PDF in batch mode 
 # in case of failure you must run Power Shell as Administrator and put the follow command
 # PS > Set-ExecutionPolicy Unrestricted (press enter)
 # Will ask if you confirm your decision. you say Yes
 #
 # This script work on any place on your PC  you only must define the work path in $Files 
 # variable this folder must contain the word documents.
 # 
 # Tested in: Windows 8 and Windows 8.1 with Office 360 installed
#>


$Files=Get-ChildItem 'C:\doc2pdf'

$Word = New-Object -ComObject Word.Application

Foreach ($File in $Files) {
    $Doc = $Word.Documents.Open($File.FullName)
    $Name=($Doc.FullName).replace('docx', 'pdf')
    $Doc.SaveAs($Name, 17)
    $Doc.Close()
}
<# optional line if fails try comment and run again #>
$word.Quit() 
