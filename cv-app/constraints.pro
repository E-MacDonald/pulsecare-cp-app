gen_enforced_dependency(WorkspaceCwd, DependencyIdent, null, dependencies) :-
  workspace_has_dependency(WorkspaceCwd, DependencyIdent, _, dependencies),
  DependencyIdent \= '@testing-library/jest-dom', 
  DependencyIdent \= '@testing-library/react', 
  DependencyIdent \= '@testing-library/user-event', 
  DependencyIdent \= 'eslint-config-react-app', 
  DependencyIdent \= 'react', 
  DependencyIdent \= 'react-dom', 
  DependencyIdent \= 'react-router-dom', 
  DependencyIdent \= 'react-scripts'.

gen_enforced_dependency(WorkspaceCwd, DependencyIdent, null, devDependencies) :-
  workspace_has_dependency(WorkspaceCwd, DependencyIdent, _, devDependencies).