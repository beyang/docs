// Source: https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_03_02.html
export const vars: { [key: string]: string } = {
  BASH: `The full pathname used to execute the current instance of Bash.`,
  BASHOPTS: `A colon-separated list of enabled shell options.  Each word in
the list is a valid argument for the <samp>-s</samp> option to the
<code>shopt</code> builtin command (see <a href="The-Shopt-Builtin.html#The-Shopt-Builtin">The Shopt Builtin</a>).
The options appearing in <code>BASHOPTS</code> are those reported
as ‘<samp>on</samp>’ by ‘<samp>shopt</samp>’.
If this variable is in the environment when Bash
starts up, each shell option in the list will be enabled before
reading any startup files.  This variable is readonly.`,
  BASHPID: `Expands to the process ID of the current Bash process.
This differs from <code>$$</code> under certain circumstances, such as subshells
that do not require Bash to be re-initialized.
Assignments to <code>BASHPID</code> have no effect.
If <code>BASHPID</code>
is unset, it loses its special properties, even if it is
subsequently reset.`,
  BASH_ALIASES: `An associative array variable whose members correspond to the internal
list of aliases as maintained by the <code>alias</code> builtin.
(see <a href="Bourne-Shell-Builtins.html#Bourne-Shell-Builtins">Bourne Shell Builtins</a>).
Elements added to this array appear in the alias list; however,
unsetting array elements currently does not cause aliases to be removed
from the alias list.
If <code>BASH_ALIASES</code>
is unset, it loses its special properties, even if it is
subsequently reset.`,
  BASH_ARGC: `An array variable whose values are the number of parameters in each
frame of the current bash execution call stack.  The number of
parameters to the current subroutine (shell function or script executed
with <code>.</code> or <code>source</code>) is at the top of the stack.  When a
subroutine is executed, the number of parameters passed is pushed onto
<code>BASH_ARGC</code>.
The shell sets <code>BASH_ARGC</code> only when in extended debugging mode
(see <a href="The-Shopt-Builtin.html#The-Shopt-Builtin">The Shopt Builtin</a>
for a description of the <code>extdebug</code> option to the <code>shopt</code>
builtin).
Setting <code>extdebug</code> after the shell has started to execute a script,
or referencing this variable when <code>extdebug</code> is not set,
may result in inconsistent values.`,
  BASH_ARGV: `An array variable containing all of the parameters in the current bash
execution call stack.  The final parameter of the last subroutine call
is at the top of the stack; the first parameter of the initial call is
at the bottom.  When a subroutine is executed, the parameters supplied
are pushed onto <code>BASH_ARGV</code>.
The shell sets <code>BASH_ARGV</code> only when in extended debugging mode
(see <a href="The-Shopt-Builtin.html#The-Shopt-Builtin">The Shopt Builtin</a>
for a description of the <code>extdebug</code> option to the <code>shopt</code>
builtin).
Setting <code>extdebug</code> after the shell has started to execute a script,
or referencing this variable when <code>extdebug</code> is not set,
may result in inconsistent values.`,
  BASH_ARGV0: `When referenced, this variable expands to the name of the shell or shell
script (identical to <code>$0</code>; See <a href="Special-Parameters.html#Special-Parameters">Special Parameters</a>,
for the description of special parameter 0).
Assignment to <code>BASH_ARGV0</code>
causes the value assigned to also be assigned to <code>$0</code>.
If <code>BASH_ARGV0</code>
is unset, it loses its special properties, even if it is
subsequently reset.`,
  BASH_CMDS: `An associative array variable whose members correspond to the internal
hash table of commands as maintained by the <code>hash</code> builtin
(see <a href="Bourne-Shell-Builtins.html#Bourne-Shell-Builtins">Bourne Shell Builtins</a>).
Elements added to this array appear in the hash table; however,
unsetting array elements currently does not cause command names to be removed
from the hash table.
If <code>BASH_CMDS</code>
is unset, it loses its special properties, even if it is
subsequently reset.`,
  BASH_COMMAND: `The command currently being executed or about to be executed, unless the
shell is executing a command as the result of a trap,
in which case it is the command executing at the time of the trap.`,
  BASH_COMPAT: `The value is used to set the shell’s compatibility level.
See <a href="The-Shopt-Builtin.html#The-Shopt-Builtin">The Shopt Builtin</a>, for a description of the various compatibility
levels and their effects.
The value may be a decimal number (e.g., 4.2) or an integer (e.g., 42)
corresponding to the desired compatibility level.
If <code>BASH_COMPAT</code> is unset or set to the empty string, the compatibility
level is set to the default for the current version.
If <code>BASH_COMPAT</code> is set to a value that is not one of the valid
compatibility levels, the shell prints an error message and sets the
compatibility level to the default for the current version.
The valid compatibility levels correspond to the compatibility options
accepted by the <code>shopt</code> builtin described above (for example,
<var>compat42</var> means that 4.2 and 42 are valid values).
The current version is also a valid value.`,
  BASH_ENV: `If this variable is set when Bash is invoked to execute a shell
script, its value is expanded and used as the name of a startup file
to read before executing the script.  See <a href="Bash-Startup-Files.html#Bash-Startup-Files">Bash Startup Files</a>.`,
  BASH_EXECUTION_STRING: `The command argument to the <samp>-c</samp> invocation option.`,
  BASH_LINENO: `An array variable whose members are the line numbers in source files
where each corresponding member of <var>FUNCNAME</var> was invoked.
<code>\${BASH_LINENO[$i]}</code> is the line number in the source file
(<code>\${BASH_SOURCE[$i+1]}</code>) where
<code>\${FUNCNAME[$i]}</code> was called (or <code>\${BASH_LINENO[$i-1]}</code> if
referenced within another shell function).
Use <code>LINENO</code> to obtain the current line number.`,
  BASH_LOADABLES_PATH: `A colon-separated list of directories in which the shell looks for
dynamically loadable builtins specified by the
<code>enable</code> command.`,
  BASH_REMATCH: `An array variable whose members are assigned by the ‘<samp>=~</samp>’ binary
operator to the <code>[[</code> conditional command
(see <a href="Conditional-Constructs.html#Conditional-Constructs">Conditional Constructs</a>).
The element with index 0 is the portion of the string
matching the entire regular expression.
The element with index <var>n</var> is the portion of the
string matching the <var>n</var>th parenthesized subexpression.
This variable is read-only.`,
  BASH_SOURCE: `An array variable whose members are the source filenames where the
corresponding shell function names in the <code>FUNCNAME</code> array
variable are defined.
The shell function <code>\${FUNCNAME[$i]}</code> is defined in the file
<code>\${BASH_SOURCE[$i]}</code> and called from <code>\${BASH_SOURCE[$i+1]}</code>`,
  BASH_SUBSHELL: `Incremented by one within each subshell or subshell environment when
the shell begins executing in that environment.
The initial value is 0.`,
  BASH_VERSINFO: `<p>A readonly array variable (see <a href="Arrays.html#Arrays">Arrays</a>)
whose members hold version information for this instance of Bash.
The values assigned to the array members are as follows:
</p>
<dl compact="compact">
<dt><code>BASH_VERSINFO[0]</code></dt>
<dd><p>The major version number (the <var>release</var>).
</p>
</dd>
<dt><code>BASH_VERSINFO[1]</code></dt>
<dd><p>The minor version number (the <var>version</var>).
</p>
</dd>
<dt><code>BASH_VERSINFO[2]</code></dt>
<dd><p>The patch level.
</p>
</dd>
<dt><code>BASH_VERSINFO[3]</code></dt>
<dd><p>The build version.
</p>
</dd>
<dt><code>BASH_VERSINFO[4]</code></dt>
<dd><p>The release status (e.g., <var>beta1</var>).
</p>
</dd>
<dt><code>BASH_VERSINFO[5]</code></dt>
<dd><p>The value of <code>MACHTYPE</code>.
</p></dd>
</dl>`,
  BASH_VERSION: `The version number of the current instance of Bash.`,
  BASH_XTRACEFD: `If set to an integer corresponding to a valid file descriptor, Bash
will write the trace output generated when ‘<samp>set -x</samp>’
is enabled to that file descriptor.
This allows tracing output to be separated from diagnostic and error
messages.
The file descriptor is closed when <code>BASH_XTRACEFD</code> is unset or assigned
a new value.
Unsetting <code>BASH_XTRACEFD</code> or assigning it the empty string causes the
trace output to be sent to the standard error.
Note that setting <code>BASH_XTRACEFD</code> to 2 (the standard error file
descriptor) and then unsetting it will result in the standard error
being closed.`,
  CHILD_MAX: `Set the number of exited child status values for the shell to remember.
Bash will not allow this value to be decreased below a <small>POSIX</small>-mandated
minimum, and there is a maximum value (currently 8192) that this may
not exceed.
The minimum value is system-dependent.`,
  COLUMNS: `Used by the <code>select</code> command to determine the terminal width
when printing selection lists.
Automatically set if the <code>checkwinsize</code> option is enabled
(see <a href="The-Shopt-Builtin.html#The-Shopt-Builtin">The Shopt Builtin</a>), or in an interactive shell upon receipt of a
<code>SIGWINCH</code>.`,
  COMP_CWORD: `An index into <code>\${COMP_WORDS}</code> of the word containing the current
cursor position.
This variable is available only in shell functions invoked by the
programmable completion facilities (see <a href="Programmable-Completion.html#Programmable-Completion">Programmable Completion</a>).`,
  COMP_LINE: `The current command line.
This variable is available only in shell functions and external
commands invoked by the
programmable completion facilities (see <a href="Programmable-Completion.html#Programmable-Completion">Programmable Completion</a>).`,
  COMP_POINT: `The index of the current cursor position relative to the beginning of
the current command.
If the current cursor position is at the end of the current command,
the value of this variable is equal to <code>\${#COMP_LINE}</code>.
This variable is available only in shell functions and external
commands invoked by the
programmable completion facilities (see <a href="Programmable-Completion.html#Programmable-Completion">Programmable Completion</a>).`,
  COMP_TYPE: `Set to an integer value corresponding to the type of completion attempted
that caused a completion function to be called:
<var>TAB</var>, for normal completion,
‘<samp>?</samp>’, for listing completions after successive tabs,
‘<samp>!</samp>’, for listing alternatives on partial word completion,
‘<samp>@</samp>’, to list completions if the word is not unmodified,
or
‘<samp>%</samp>’, for menu completion.
This variable is available only in shell functions and external
commands invoked by the
programmable completion facilities (see <a href="Programmable-Completion.html#Programmable-Completion">Programmable Completion</a>).`,
  COMP_KEY: `The key (or final key of a key sequence) used to invoke the current
completion function.`,
  COMP_WORDBREAKS: `The set of characters that the Readline library treats as word
separators when performing word completion.
If <code>COMP_WORDBREAKS</code> is unset, it loses its special properties,
even if it is subsequently reset.`,
  COMP_WORDS: `An array variable consisting of the individual
words in the current command line.
The line is split into words as Readline would split it, using
<code>COMP_WORDBREAKS</code> as described above.
This variable is available only in shell functions invoked by the
programmable completion facilities (see <a href="Programmable-Completion.html#Programmable-Completion">Programmable Completion</a>).`,
  COMPREPLY: `An array variable from which Bash reads the possible completions
generated by a shell function invoked by the programmable completion
facility (see <a href="Programmable-Completion.html#Programmable-Completion">Programmable Completion</a>).
Each array element contains one possible completion.`,
  COPROC: `An array variable created to hold the file descriptors
for output from and input to an unnamed coprocess (see <a href="Coprocesses.html#Coprocesses">Coprocesses</a>).`,
  DIRSTACK: `An array variable containing the current contents of the directory stack.
Directories appear in the stack in the order they are displayed by the
<code>dirs</code> builtin.
Assigning to members of this array variable may be used to modify
directories already in the stack, but the <code>pushd</code> and <code>popd</code>
builtins must be used to add and remove directories.
Assignment to this variable will not change the current directory.
If <code>DIRSTACK</code> is unset, it loses its special properties, even if
it is subsequently reset.`,
  EMACS: `If Bash finds this variable in the environment when the shell
starts with value ‘<samp>t</samp>’, it assumes that the shell is running in an
Emacs shell buffer and disables line editing.`,
  ENV: `Similar to <code>BASH_ENV</code>; used when the shell is invoked in
<small>POSIX</small> Mode (see <a href="Bash-POSIX-Mode.html#Bash-POSIX-Mode">Bash POSIX Mode</a>).`,
  EPOCHREALTIME: `Each time this parameter is referenced, it expands to the number of seconds
since the Unix Epoch as a floating point value with micro-second granularity
(see the documentation for the C library function <var>time</var> for the
definition of Epoch).
Assignments to <code>EPOCHREALTIME</code> are ignored.
If <code>EPOCHREALTIME</code> is unset, it loses its special properties, even if
it is subsequently reset.`,
  EPOCHSECONDS: `Each time this parameter is referenced, it expands to the number of seconds
since the Unix Epoch (see the documentation for the C library function
<var>time</var> for the definition of Epoch).
Assignments to <code>EPOCHSECONDS</code> are ignored.
If <code>EPOCHSECONDS</code> is unset, it loses its special properties, even if
it is subsequently reset.`,
  EUID: `The numeric effective user id of the current user.  This variable
is readonly.`,
  EXECIGNORE: `A colon-separated list of shell patterns (see <a href="Pattern-Matching.html#Pattern-Matching">Pattern Matching</a>)
defining the list of filenames to be ignored by command search using
<code>PATH</code>.
Files whose full pathnames match one of these patterns are not considered
executable files for the purposes of completion and command execution
via <code>PATH</code> lookup.
This does not affect the behavior of the <code>[</code>, <code>test</code>, and <code>[[</code>
commands.
Full pathnames in the command hash table are not subject to <code>EXECIGNORE</code>.
Use this variable to ignore shared library files that have the executable
bit set, but are not executable files.
The pattern matching honors the setting of the <code>extglob</code> shell
option.`,
  FCEDIT: `The editor used as a default by the <samp>-e</samp> option to the <code>fc</code>
builtin command.`,
  FIGNORE: `A colon-separated list of suffixes to ignore when performing
filename completion.
A filename whose suffix matches one of the entries in
<code>FIGNORE</code>
is excluded from the list of matched filenames.  A sample
value is ‘<samp>.o:~</samp>’`,
  FUNCNAME: `An array variable containing the names of all shell functions
currently in the execution call stack.
The element with index 0 is the name of any currently-executing
shell function.
The bottom-most element (the one with the highest index)
is <code>"main"</code>.
This variable exists only when a shell function is executing.
Assignments to <code>FUNCNAME</code> have no effect.
If <code>FUNCNAME</code> is unset, it loses its special properties, even if
it is subsequently reset.
</p>
<p>This variable can be used with <code>BASH_LINENO</code> and <code>BASH_SOURCE</code>.
Each element of <code>FUNCNAME</code> has corresponding elements in
<code>BASH_LINENO</code> and <code>BASH_SOURCE</code> to describe the call stack.
For instance, <code>\${FUNCNAME[$i]}</code> was called from the file
<code>\${BASH_SOURCE[$i+1]}</code> at line number <code>\${BASH_LINENO[$i]}</code>.
The <code>caller</code> builtin displays the current call stack using this
information.`,
  FUNCNEST: `If set to a numeric value greater than 0, defines a maximum function
nesting level.  Function invocations that exceed this nesting level
will cause the current command to abort.`,
  GLOBIGNORE: `A colon-separated list of patterns defining the set of file names to
be ignored by filename expansion.
If a file name matched by a filename expansion pattern also matches one
of the patterns in <code>GLOBIGNORE</code>, it is removed from the list
of matches.
The pattern matching honors the setting of the <code>extglob</code> shell
option.`,
  GROUPS: `An array variable containing the list of groups of which the current
user is a member.
Assignments to <code>GROUPS</code> have no effect.
If <code>GROUPS</code> is unset, it loses its special properties, even if it is
subsequently reset.`,
  histchars: `Up to three characters which control history expansion, quick
substitution, and tokenization (see <a href="History-Interaction.html#History-Interaction">History Interaction</a>).
The first character is the
<var>history expansion</var> character, that is, the character which signifies the
start of a history expansion, normally ‘<samp>!</samp>’.  The second character is the
character which signifies ‘quick substitution’ when seen as the first
character on a line, normally ‘<samp>^</samp>’.  The optional third character is the
character which indicates that the remainder of the line is a comment when
found as the first character of a word, usually ‘<samp>#</samp>’.  The history
comment character causes history substitution to be skipped for the
remaining words on the line.  It does not necessarily cause the shell
parser to treat the rest of the line as a comment.`,
  HISTCMD: `The history number, or index in the history list, of the current
command.  If <code>HISTCMD</code> is unset, it loses its special properties,
even if it is subsequently reset.`,
  HISTCONTROL: `A colon-separated list of values controlling how commands are saved on
the history list.
If the list of values includes ‘<samp>ignorespace</samp>’, lines which begin
with a space character are not saved in the history list.
A value of ‘<samp>ignoredups</samp>’ causes lines which match the previous
history entry to not be saved.
A value of ‘<samp>ignoreboth</samp>’ is shorthand for
‘<samp>ignorespace</samp>’ and ‘<samp>ignoredups</samp>’.
A value of ‘<samp>erasedups</samp>’ causes all previous lines matching the
current line to be removed from the history list before that line
is saved.
Any value not in the above list is ignored.
If <code>HISTCONTROL</code> is unset, or does not include a valid value,
all lines read by the shell parser are saved on the history list,
subject to the value of <code>HISTIGNORE</code>.
The second and subsequent lines of a multi-line compound command are
not tested, and are added to the history regardless of the value of
<code>HISTCONTROL</code>.`,
  HISTFILE: `The name of the file to which the command history is saved.  The
default value is <samp>~/.bash_history</samp>.`,
  HISTFILESIZE: `The maximum number of lines contained in the history file.
When this variable is assigned a value, the history file is truncated,
if necessary, to contain no more than that number of lines
by removing the oldest entries.
The history file is also truncated to this size after
writing it when a shell exits.
If the value is 0, the history file is truncated to zero size.
Non-numeric values and numeric values less than zero inhibit truncation.
The shell sets the default value to the value of <code>HISTSIZE</code>
after reading any startup files.`,
  HISTIGNORE: `A colon-separated list of patterns used to decide which command
lines should be saved on the history list.  Each pattern is
anchored at the beginning of the line and must match the complete
line (no implicit ‘<samp>*</samp>’ is appended).  Each pattern is tested
against the line after the checks specified by <code>HISTCONTROL</code>
are applied.  In addition to the normal shell pattern matching
characters, ‘<samp>&amp;</samp>’ matches the previous history line.  ‘<samp>&amp;</samp>’
may be escaped using a backslash; the backslash is removed
before attempting a match.
The second and subsequent lines of a multi-line compound command are
not tested, and are added to the history regardless of the value of
<code>HISTIGNORE</code>.
The pattern matching honors the setting of the <code>extglob</code> shell
option.
</p>
<p><code>HISTIGNORE</code> subsumes the function of <code>HISTCONTROL</code>.  A
pattern of ‘<samp>&amp;</samp>’ is identical to <code>ignoredups</code>, and a
pattern of ‘<samp>[ ]*</samp>’ is identical to <code>ignorespace</code>.
Combining these two patterns, separating them with a colon,
provides the functionality of <code>ignoreboth</code>.`,
  HISTSIZE: `The maximum number of commands to remember on the history list.
If the value is 0, commands are not saved in the history list.
Numeric values less than zero result in every command being saved
on the history list (there is no limit).
The shell sets the default value to 500 after reading any startup files.`,
  HISTTIMEFORMAT: `If this variable is set and not null, its value is used as a format string
for <var>strftime</var> to print the time stamp associated with each history
entry displayed by the <code>history</code> builtin.
If this variable is set, time stamps are written to the history file so
they may be preserved across shell sessions.
This uses the history comment character to distinguish timestamps from
other history lines.`,
  HOSTFILE: `Contains the name of a file in the same format as <samp>/etc/hosts</samp> that
should be read when the shell needs to complete a hostname.
The list of possible hostname completions may be changed while the shell
is running;
the next time hostname completion is attempted after the
value is changed, Bash adds the contents of the new file to the
existing list.
If <code>HOSTFILE</code> is set, but has no value, or does not name a readable file,
Bash attempts to read
<samp>/etc/hosts</samp> to obtain the list of possible hostname completions.
When <code>HOSTFILE</code> is unset, the hostname list is cleared.`,
  HOSTNAME: `The name of the current host.`,
  HOSTTYPE: `A string describing the machine Bash is running on.`,
  IGNOREEOF: `Controls the action of the shell on receipt of an <code>EOF</code> character
as the sole input.  If set, the value denotes the number
of consecutive <code>EOF</code> characters that can be read as the
first character on an input line
before the shell will exit.  If the variable exists but does not
have a numeric value, or has no value, then the default is 10.
If the variable does not exist, then <code>EOF</code> signifies the end of
input to the shell.  This is only in effect for interactive shells.`,
  INPUTRC: `The name of the Readline initialization file, overriding the default
of <samp>~/.inputrc</samp>.`,
  INSIDE_EMACS: `If Bash finds this variable in the environment when the shell
starts, it assumes that the shell is running in an Emacs shell buffer
and may disable line editing depending on the value of <code>TERM</code>.`,
  LANG: `Used to determine the locale category for any category not specifically
selected with a variable starting with <code>LC_</code>.`,
  LC_ALL: `This variable overrides the value of <code>LANG</code> and any other
<code>LC_</code> variable specifying a locale category.`,
  LC_COLLATE: `This variable determines the collation order used when sorting the
results of filename expansion, and
determines the behavior of range expressions, equivalence classes,
and collating sequences within filename expansion and pattern matching
(see <a href="Filename-Expansion.html#Filename-Expansion">Filename Expansion</a>).`,
  LC_CTYPE: `This variable determines the interpretation of characters and the
behavior of character classes within filename expansion and pattern
matching (see <a href="Filename-Expansion.html#Filename-Expansion">Filename Expansion</a>).`,
  LC_MESSAGES: `This variable determines the locale used to translate double-quoted
strings preceded by a ‘<samp>$</samp>’ (see <a href="Locale-Translation.html#Locale-Translation">Locale Translation</a>).`,
  LC_NUMERIC: `This variable determines the locale category used for number formatting.`,
  LC_TIME: `This variable determines the locale category used for data and time
formatting.`,
  LINENO: `The line number in the script or shell function currently executing.`,
  LINES: `Used by the <code>select</code> command to determine the column length
for printing selection lists.
Automatically set if the <code>checkwinsize</code> option is enabled
(see <a href="The-Shopt-Builtin.html#The-Shopt-Builtin">The Shopt Builtin</a>), or in an interactive shell upon receipt of a
<code>SIGWINCH</code>.`,
  MACHTYPE: `A string that fully describes the system type on which Bash
is executing, in the standard <small>GNU</small> <var>cpu-company-system</var> format.`,
  MAILCHECK: `How often (in seconds) that the shell should check for mail in the
files specified in the <code>MAILPATH</code> or <code>MAIL</code> variables.
The default is 60 seconds.  When it is time to check
for mail, the shell does so before displaying the primary prompt.
If this variable is unset, or set to a value that is not a number
greater than or equal to zero, the shell disables mail checking.`,
  MAPFILE: `An array variable created to hold the text read by the
<code>mapfile</code> builtin when no variable name is supplied.`,
  OLDPWD: `The previous working directory as set by the <code>cd</code> builtin.`,
  OPTERR: `If set to the value 1, Bash displays error messages
generated by the <code>getopts</code> builtin command.`,
  OSTYPE: `A string describing the operating system Bash is running on.`,
  PIPESTATUS: `An array variable (see <a href="Arrays.html#Arrays">Arrays</a>)
containing a list of exit status values from the processes
in the most-recently-executed foreground pipeline (which may
contain only a single command).`,
  POSIXLY_CORRECT: `If this variable is in the environment when Bash starts, the shell
enters <small>POSIX</small> mode (see <a href="Bash-POSIX-Mode.html#Bash-POSIX-Mode">Bash POSIX Mode</a>) before reading the
startup files, as if the <samp>--posix</samp> invocation option had been supplied.
If it is set while the shell is running, Bash enables <small>POSIX</small> mode,
as if the command
</p><div class="example">
<pre class="example"><code>set -o posix</code>
</pre></div>
<p>had been executed.
When the shell enters <small>POSIX</small> mode, it sets this variable if it was
not already set.`,
  PPID: `The process <small>ID</small> of the shell’s parent process.  This variable
is readonly.`,
  PROMPT_COMMAND: `If set, the value is interpreted as a command to execute
before the printing of each primary prompt (<code>$PS1</code>).`,
  PROMPT_DIRTRIM: `If set to a number greater than zero, the value is used as the number of
trailing directory components to retain when expanding the <code>\w</code> and
<code>\W</code> prompt string escapes (see <a href="Controlling-the-Prompt.html#Controlling-the-Prompt">Controlling the Prompt</a>).
Characters removed are replaced with an ellipsis.`,
  PS0: `The value of this parameter is expanded like <var>PS1</var>
and displayed by interactive shells after reading a command
and before the command is executed.`,
  PS3: `The value of this variable is used as the prompt for the
<code>select</code> command.  If this variable is not set, the
<code>select</code> command prompts with ‘<samp>#? </samp>’`,
  PS4: `The value of this parameter is expanded like <var>PS1</var>
and the expanded value is the prompt printed before the command line
is echoed when the <samp>-x</samp> option is set (see <a href="The-Set-Builtin.html#The-Set-Builtin">The Set Builtin</a>).
The first character of the expanded value is replicated multiple times,
as necessary, to indicate multiple levels of indirection.
The default is ‘<samp>+ </samp>’.`,
  PWD: `The current working directory as set by the <code>cd</code> builtin.`,
  RANDOM: `Each time this parameter is referenced, a random integer
between 0 and 32767 is generated.  Assigning a value to this
variable seeds the random number generator.`,
  READLINE_LINE: `The contents of the Readline line buffer, for use
with ‘<samp>bind -x</samp>’ (see <a href="Bash-Builtins.html#Bash-Builtins">Bash Builtins</a>).`,
  READLINE_POINT: `The position of the insertion point in the Readline line buffer, for use
with ‘<samp>bind -x</samp>’ (see <a href="Bash-Builtins.html#Bash-Builtins">Bash Builtins</a>).`,
  REPLY: `The default variable for the <code>read</code> builtin.`,
  SECONDS: `This variable expands to the number of seconds since the
shell was started.  Assignment to this variable resets
the count to the value assigned, and the expanded value
becomes the value assigned plus the number of seconds
since the assignment.`,
  SHELL: `The full pathname to the shell is kept in this environment variable.
If it is not set when the shell starts,
Bash assigns to it the full pathname of the current user’s login shell.`,
  SHELLOPTS: `A colon-separated list of enabled shell options.  Each word in
the list is a valid argument for the <samp>-o</samp> option to the
<code>set</code> builtin command (see <a href="The-Set-Builtin.html#The-Set-Builtin">The Set Builtin</a>).
The options appearing in <code>SHELLOPTS</code> are those reported
as ‘<samp>on</samp>’ by ‘<samp>set -o</samp>’.
If this variable is in the environment when Bash
starts up, each shell option in the list will be enabled before
reading any startup files.  This variable is readonly.`,
  SHLVL: `Incremented by one each time a new instance of Bash is started.  This is
intended to be a count of how deeply your Bash shells are nested.`,
  TIMEFORMAT: `<p>The value of this parameter is used as a format string specifying
how the timing information for pipelines prefixed with the <code>time</code>
reserved word should be displayed.
The ‘<samp>%</samp>’ character introduces an
escape sequence that is expanded to a time value or other
information.
The escape sequences and their meanings are as
follows; the braces denote optional portions.
</p>
<dl compact="compact">
<dt><code>%%</code></dt>
<dd><p>A literal ‘<samp>%</samp>’.
</p>
</dd>
<dt><code>%[<var>p</var>][l]R</code></dt>
<dd><p>The elapsed time in seconds.
</p>
</dd>
<dt><code>%[<var>p</var>][l]U</code></dt>
<dd><p>The number of CPU seconds spent in user mode.
</p>
</dd>
<dt><code>%[<var>p</var>][l]S</code></dt>
<dd><p>The number of CPU seconds spent in system mode.
</p>
</dd>
<dt><code>%P</code></dt>
<dd><p>The CPU percentage, computed as (%U + %S) / %R.
</p></dd>
</dl>

<p>The optional <var>p</var> is a digit specifying the precision, the number of
fractional digits after a decimal point.
A value of 0 causes no decimal point or fraction to be output.
At most three places after the decimal point may be specified; values
of <var>p</var> greater than 3 are changed to 3.
If <var>p</var> is not specified, the value 3 is used.
</p>
<p>The optional <code>l</code> specifies a longer format, including minutes, of
the form <var>MM</var>m<var>SS</var>.<var>FF</var>s.
The value of <var>p</var> determines whether or not the fraction is included.
</p>
<p>If this variable is not set, Bash acts as if it had the value
</p><div class="example">
<pre class="example"><code>$'\nreal\t%3lR\nuser\t%3lU\nsys\t%3lS'</code>
</pre></div>
<p>If the value is null, no timing information is displayed.
A trailing newline is added when the format string is displayed.
</p>
</dd>`,
  TMOUT: `If set to a value greater than zero, <code>TMOUT</code> is treated as the
default timeout for the <code>read</code> builtin (see <a href="Bash-Builtins.html#Bash-Builtins">Bash Builtins</a>).
The <code>select</code> command (see <a href="Conditional-Constructs.html#Conditional-Constructs">Conditional Constructs</a>) terminates
if input does not arrive after <code>TMOUT</code> seconds when input is coming
from a terminal.
</p>
<p>In an interactive shell, the value is interpreted as
the number of seconds to wait for a line of input after issuing
the primary prompt.
Bash
terminates after waiting for that number of seconds if a complete
line of input does not arrive.`,
  TMPDIR: `If set, Bash uses its value as the name of a directory in which
Bash creates temporary files for the shell’s use.`,
  UID: `The numeric real user id of the current user.  This variable is readonly.`,
};
